import React from 'react';

import Cube from '../components/Cube';
import Navbar from '../components/Navbar';

const Index= () => {

    return(
        <>
            <div class="content">
                <Cube />
            </div>

            <Navbar />
            
            <div className="bottom-content text-center">
                <h6>© 2021 Petra Piknova</h6>
            </div>
        </>
    )
};

export default Index;