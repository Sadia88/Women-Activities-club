import React from 'react';
import './Activities.css'
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const Activities = ({activities,exerciseTime,setExcerciseTime}) => {
 
    return (
        <div>
            <h1>Select today’s exercise</h1>
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