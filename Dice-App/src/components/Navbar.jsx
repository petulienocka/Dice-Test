import React from 'react';

import Button from 'react-bootstrap/Button';


const Navbar = () => {

    
    return(
        <>
          <div className="nav-buttons row text-center justify-content-center mt-5">     
            <Button data-aos="zoom-in" variant="outline-dark shadow-lg" href="/single">SINGLE</Button>
            <Button data-aos="zoom-in" variant="outline-dark ml-3 shadow-lg" href="/multiple">MULTIPLE</Button>
            <Button data-aos="zoom-in" variant="outline-dark ml-3 shadow-lg" href="/custom">CUSTOM</Button>
          </div>
        </>
    )
};


export default Navbar;