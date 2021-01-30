import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';

import { GiPerspectiveDiceSixFacesOne} from "react-icons/gi";

import dice1 from '../assets/images/dice-1.png';
import dice2 from '../assets/images/dice-2.png';
import dice3 from '../assets/images/dice-3.png';
import dice4 from '../assets/images/dice-4.png';
import dice5 from '../assets/images/dice-5.png';
import dice6 from '../assets/images/dice-6.png';

const RollSingle = () => {

    const dices = ["", dice1, dice2, dice3, dice4, dice5, dice6 ];

    const [result, setResult] = useState(1);

    const rollResult = () => {

        setResult(Math.ceil(Math.random() * 6));

    }

    return(
        <>

        <div className="image" data-aos="flip-left">
            <img src={dices[result]} alt="singleImage" className="dice"/>
        </div>
        
        <div className="btn-roll mt-5" data-aos="fade-up">
            <Button variant="outline-dark shadow-lg" onClick={rollResult}><GiPerspectiveDiceSixFacesOne size={30}/>
            <span className="ml-2">Roll dice</span></Button>
        </div>
        
        </>
    )
};

export default RollSingle;