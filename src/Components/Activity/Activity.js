import React from 'react';
import './Activity.css'
const Activity = ({activity}) => {
    console.log(activity.picture)
    return (
        <div className='activity-container'> 
            <img src={activity.picture} alt="" />
            <h3>{activity.name}</h3>
            <p>{activity.description.slice(0,80)}</p>
            <h6>For Age :{activity.age}</h6>
            <h6>Time required : {activity.time}</h6>
            <button className='btn-addToCart'>Add to list</button>
        </div>
    );
};

export default Activity;