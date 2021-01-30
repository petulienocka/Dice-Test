import React, {useState} from 'react';

import { FaDiceD6 } from "react-icons/fa";

import customDice from "../assets/images/dice-blank.png";

import Header from './Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const RollCustom = () => {

    const [customs, setCustoms] = useState([]);
    const [word1, setWord1] = useState("");
    const [word2, setWord2] = useState("");
    const [word3, setWord3] = useState("");
    const [word4, setWord4] = useState("");
    const [word5, setWord5] = useState("");
    const [word6, setWord6] = useState("");


    const addCustom = (word1, word2, word3, word4, word5, word6) => {
        setCustoms([word1, word2, word3, word4, word5, word6 ])
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCustom(word1, word2, word3, word4, word5, word6);
    };

    const randomWord = () => {
        return parseInt(Math.random() * 6, 10);
    };



    return(
        <>
        <Header />
    
        <Container className="dice-container text-center justify-content-center mt-5">

        <img data-aos="flip-left" src={customDice} alt="custom-dice" className="dice"/>

        <h2 className="dice-text">{customs[randomWord()]}</h2>
            
       
        <form onSubmit={handleSubmit} data-aos="fade-up">
            <Row>
                <Col>
                    <Form.Control type="text" value={word1} onChange={(e) => setWord1(e.target.value )}/>
                </Col>
                <Col>
                    <Form.Control type="text" value={word2} onChange={(e) => setWord2(e.target.value )}/>
                </Col>
                <Col>
                    <Form.Control type="text" value={word3} onChange={(e) => setWord3(e.target.value )}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Control type="text" value={word4} onChange={(e) => setWord4(e.target.value )}/>
                </Col>
                <Col>
                    <Form.Control type="text" value={word5} onChange={(e) => setWord5(e.target.value )}/>
                </Col>
                <Col>
                    <Form.Control type="text" value={word6} onChange={(e) => setWord6(e.target.value )}/>
                </Col>
            </Row>
                <Col className="mt-5">
                    <Button variant="outline-dark shadow-lg" type="submit"><FaDiceD6 size={30}/>
                    <span className="ml-2">Roll dice</span></Button>
                </Col>
            
        </form>
        
        </Container>
        </>
    )
};


export default RollCustom;