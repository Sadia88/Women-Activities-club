import React from 'react';
import './Activities.css'
import { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
const Activities = ({activities}) => {
 
    return (
        <div>
            <h5>Select today’s exercise</h5>
           <div className='activities-container'>
           {
            activities.map((activity)=>(
               
                <Activity activity={activity} key={activity?.id} ></Activity>
            ))
          }
           </div>
        </div>
    );
};

export default Activities;