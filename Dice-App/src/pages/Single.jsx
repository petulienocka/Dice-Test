import React from 'react';
import RollSingle from '../components/RollSingle';
import Header from '../components/Header';



const Single = () => {
    return(
        <>
            <Header />

            <div className="justify-content-center text-center mt-5">
                <RollSingle />
            </div>

        </>
    )
};

export default Single;