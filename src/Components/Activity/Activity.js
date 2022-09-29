import React from 'react';
import './Activity.css'
const Activity = ({activity}) => {
const {picture,name,description,age,time}=activity
    return (
        <div className='activity-container'> 
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{description.slice(0,80)}</p>
            <h6><small>For Age</small> :{age}</h6>
            <h6>Time required : {time}s</h6>
            <button className='btn-addToCart'>Add to list</button>
        </div>
    );
};

export default Activity;