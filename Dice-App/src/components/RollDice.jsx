import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { FaDice } from "react-icons/fa";
import { IoCalculator } from "react-icons/io5";


// Image Import //
import dice1 from '../assets/images/dice-1.png';
import dice2 from '../assets/images/dice-2.png';
import dice3 from '../assets/images/dice-3.png';
import dice4 from '../assets/images/dice-4.png';
import dice5 from '../assets/images/dice-5.png';
import dice6 from '../assets/images/dice-6.png';
import Header from './Header';


const RollDice = () => {

    const dices = ["", dice1, dice2, dice3, dice4, dice5, dice6 ];

    // Setting the default dice values //
    const [firstResult, setFirstResult] = useState(1);
    const [secondResult, setSecondResult] = useState(5);
    const [thirdResult, setThirdResult] = useState(3);
    const [fourthResult, setFourthResult] = useState(4);

    const [shake, setShake] = useState(false);


    // Roll the dice //
    const rollResult = () => {

        setFirstResult(Math.ceil(Math.random() * 6));
        setSecondResult(Math.ceil(Math.random() * 6));
        setThirdResult(Math.ceil(Math.random() * 6));
        setFourthResult(Math.ceil(Math.random() * 6));

        setShake(true);
        setTimeout(() => setShake(false), 2000);

    }

    // Show Calculation onClick //
    const [showResults, setShowResults] = useState(false);

    return(
        <>

        <Header />

        <Container className="text-center justify-content-center mt-5">
            
            <img data-aos="flip-left" src={dices[firstResult]} alt="firstImage" className="dice"/>
            <img data-aos="flip-left" src={dices[secondResult]} alt="secondImage" className="dice"/>
            <img data-aos="flip-left" src={dices[thirdResult]} alt="thirdImage" className="dice"/>
            <img data-aos="flip-left" src={dices[fourthResult]} alt="fourthImage" className="dice"/>
            
            {showResults &&
            <div className="row justify-content-center count-row mt-3">
                <p>{firstResult} + {secondResult} + {thirdResult} + {fourthResult} = {firstResult + secondResult + thirdResult + fourthResult }</p>
            </div>
            }
        
            <div className="button mt-5" data-aos="fade-up">
                
                <Button variant="outline-dark shadow-lg" onClick={rollResult} className={shake ? `shake` : null}><FaDice size={30}/>
                <span className="ml-2">Roll dice</span></Button>
                <Button variant="outline-dark shadow-lg" className="ml-3" onClick={() => setShowResults(!showResults)}><IoCalculator size={30}/>
                <span>{showResults ? "Hide" : "Calculate"}</span></Button>

            </div>
        
        </Container>
        </>
    )
};

export default RollDice;