import React from 'react';
import './Activities.css'
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const Activities = ({activities,exerciseTime,setExcerciseTime}) => {
 
    return (
        <div>
            <h5>Select today’s exercise</h5>
           <div className='activities-container'>
           {
            activities.map((activity)=>(
               
                <Activity activity={activity} key={activity?.id} exerciseTime={exerciseTime} setExcerciseTime={setExcerciseTime} ></Activity>
            ))
          }
           </div>
        </div>
    );
};

export default Activities;