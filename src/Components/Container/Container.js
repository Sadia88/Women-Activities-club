import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
            <div className='left-section'>

                <LeftSection></LeftSection>
            </div>
            <div className='right-section'>
                <h1>right side</h1>
            </div>
        </div>
    );
};

export default Container;