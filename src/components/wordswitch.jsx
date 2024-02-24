import {useState, useContext} from 'react';
import { Switch } from '@mui/material';
import { WordContext, Option } from './container';

function WordSwitch(){

    //let w = useContext(WordContext);
    //const [word, setWord] = useState(useContext(WordContext));
    const thing = useContext(WordContext);

    return(
        <div>
            <Switch onChange={() => setWord(thing)}/>
        </div>
    );
}

export default WordSwitch;