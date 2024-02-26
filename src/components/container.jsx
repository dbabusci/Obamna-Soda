import {useState, useEffect, createContext} from 'react';
import { Switch } from '@mui/material';

export const WordContext = createContext();
export const ColorContext = createContext();

function Container({ children }){

    const Option = {
        o: 'obamna',
        s: 'soda!'
    }

    const [word, setWord] = useState(Option.o);
    const [mouseXY, setMouseXY] = useState({x: 0, y: 0});
    const [colorValue, setColorValue] = useState({r: 0, g: 0, b: 0}); 

    function flipWord(){
        if(word == Option.o){setWord(Option.s);}
        else{setWord(Option.o);}
    }

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

    useEffect(() =>{
        setColorValue({
            r: mouseXY.x % 255,
            g: mouseXY.y % 255,
            b: (mouseXY.x + mouseXY.y) % 255,
        });
    }, [mouseXY]);    

    return(
        <WordContext.Provider value={word}>
            <ColorContext.Provider value={colorValue}>
                <div className='container-holder'>
                    <Switch onChange={flipWord}/>
                    {children}
                </div>
            </ColorContext.Provider>
        </WordContext.Provider>
    );
}

export default Container;