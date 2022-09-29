import React from 'react';
import './LeftSection.css'

import Activities from '../Activities/Activities';

const LeftSection = ({activities}) => {
    return (
        <div className='left-section-container'>
            <div className='header'>
            <img src="https://media.istockphoto.com/photos/healthy-eating-meal-with-exercise-picture-id174912173" alt="" />
                <h1>Women Activities Club</h1>
                
               
            </div>
            <Activities activities={activities}></Activities>
        </div>
    );
};

export default LeftSection;