import React from 'react';
import './RightSection.css'


import {FaFontAwesome, FaSearchLocation } from "react-icons/fa";
import AddABreak from '../AddABreak/AddABreak';

const RightSection = () => {
    return (
        <div className='right-section'>
            <div className='profile'>
                <img src="https://media.istockphoto.com/photos/shot-of-a-beautiful-young-woman-posing-against-a-grey-background-picture-id1352839823" alt="" />
               <div>
               <h3>Sadia Sharmin</h3>
               <div>
            
               <FaFontAwesome icon={FaSearchLocation}></FaFontAwesome>
               <small>Chittagong , Bangladesh</small>
               </div>
               </div>
            </div>
            <div className='info'>
               <div className='individual-info'>
               <h4>75<small>kg</small></h4>
               <p>Weight</p>
               </div>
               <div className='individual-info'>
               <h4>6.5</h4>
               <p>Height</p>
               </div>
               <div className='individual-info'>
               <h4>25<small>yrs</small></h4>
               <p>Age</p>
               </div>
            </div>
            <AddABreak></AddABreak>
        </div>
    );
};

export default RightSection;