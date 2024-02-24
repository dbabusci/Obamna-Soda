import {useState, useEffect, createContext} from 'react';
import Text from './text';
import WordSwitch from './wordswitch';

export const Option = {
    o: 'obamna',
    s: 'soda!'
}

export const WordContext = createContext({
    word: Option.o,
    setWord: (word) => {
        if(word == Option.o){setWord(Option.s); console.log("Change from o->s");}
        else{setWord(Option.o); console.log("Change from s->o");}
    }
});
export const ColorContext = createContext();

function Container(){

    const [word, setWord] = useState(Option.o);
    //const value = {word, setWord};
    const [mouseXY, setMouseXY] = useState({x: 0, y: 0});
    const [colorValue, setColorValue] = useState({r: 0, g: 0, b: 0}); 

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
                    <WordSwitch/>
                </ColorContext.Provider>
            </WordContext.Provider>
        </div>
    );
}

export default Container;