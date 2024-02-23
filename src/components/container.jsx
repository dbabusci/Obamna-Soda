import {useState, useEffect, createContext} from 'react';
import Text from './text';

export const WordContext = createContext();
export const ColorContext = createContext();

function Container(){

    const [word, setWord] = useState('obamna');
    const [mouseXY, setMouseXY] = useState({x: 0, y: 0});
    const [colorValue, setColorValue] = useState({r: 0, g: 0, b: 0}); //combine maybe

    useEffect(() =>{
        const handleWindowMouseMovement = event => {
            setMouseXY({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener('mousemove', handleWindowMouseMovement)

        return() => {
            window.removeEventListener('mousemove', handleWindowMouseMovement,);
        };
    }, []);
    /*
    Works but err
    */
    useEffect(() =>{
        setColorValue({
            r: mouseXY.x % 255,
            g: mouseXY.y % 255,
            b: (mouseXY.x + mouseXY.y) % 255,
        });
    }, [mouseXY]);    

    return(
        <div className='container-holder'>
            <WordContext.Provider value={word}>
                <ColorContext.Provider value={colorValue}>
                    <Text/>
                </ColorContext.Provider>
            </WordContext.Provider>
        </div>
    );
}

export default Container;