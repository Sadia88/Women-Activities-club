import React from 'react';
import './LeftSection.css'
import logo from '../../images/logo2.jpg'
import Activities from '../Activities/Activities';

const LeftSection = () => {
    return (
        <div className='left-section-container'>
            <div className='header'>
            <img src={logo}alt="" />
                <h1>Women Activities Club</h1>
                
               
            </div>
            <Activities></Activities>
        </div>
    );
};

export default LeftSection;