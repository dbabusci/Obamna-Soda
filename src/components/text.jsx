import {useState, useEffect, useContext} from 'react';
import { WordContext } from './container';

function Text(){
    const word = useContext(WordContext);

    return(
        <div>{word}</div>
    );
}

export default Text;