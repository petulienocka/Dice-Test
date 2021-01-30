import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import { FaArrowLeft } from "react-icons/fa";

const Header = () => {
    return(
        <>
        <Navbar bg="dark">
            <Navbar.Brand href="/">
                <Button className="back-btn" variant="link"><FaArrowLeft className="back-icon" /></Button>
                <span className="back-span">Go Back</span>
            </Navbar.Brand>
        
        </Navbar>
        

        </>
    )
};

export default Header;