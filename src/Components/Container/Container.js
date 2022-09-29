import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
            <div className='left-section'>

                <LeftSection></LeftSection>
            </div>
            <div className='right-section'>
                <RightSection></RightSection>
            </div>
        </div>
    );
};

export default Container;