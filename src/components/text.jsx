import {useState, useEffect, useContext} from 'react';
import { WordContext, ColorContext } from './container';
//style
import '../style/style.css';

function Text(){
    const word = useContext(WordContext);
    const cc = useContext(ColorContext);

    const [color, setColor] = useState('');

    useEffect(() => {
        setColor('rgb(' + String(cc.r) + ',' + String(cc.g) + ',' + String(cc.b) + ')');
    });

    return(
        <div className='text-holder'>
            <p className='text-style' style={{ color }}>{word}</p>
        </div>
    );
}

export default Text;