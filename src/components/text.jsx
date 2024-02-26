import {useState, useEffect, useContext} from 'react';
import { WordContext, ColorContext } from './container';
//style
import '../style/style.css';

function Text(){
    const w = useContext(WordContext);
    const cc = useContext(ColorContext);

    const [word, setWord] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        setColor('rgb(' + String(cc.r) + ',' + String(cc.g) + ',' + String(cc.b) + ')');
    });

    useEffect(() => {
        setWord(w);
    })

    return(
        <div className='text-holder'>
            <p className='text-style' style={{ color }}>{word}</p>
        </div>
    );
}

export default Text;