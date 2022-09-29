import React, { useState } from 'react';
import './AddABreak.css'

const AddABreak = ({exerciseTime,setExcerciseTime}) => {
    // // console.log(activities)
    // const {time}=activities;

    // // console.log(activities.time)
    // activities.map((activity)=>(
    //        console.log(activity.time)    
       
    // ))
const [breakTime,setBreakTime]=useState(0)

    const handleBreakTime=(e)=>{


        let  updatedBreakTime=parseInt(e.target.innerText)
        // console.log(typeof(updatedBreakTime))
       
            updatedBreakTime=breakTime+updatedBreakTime
            setBreakTime(updatedBreakTime)
        
       
       
    }
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-container'>
            
            <button className="btn-breakTime"><span  onClick={handleBreakTime}>10</span>s</button>
            <button className="btn-breakTime"><span  onClick={handleBreakTime}>20</span>s</button>
            <button className="btn-breakTime"><span  onClick={handleBreakTime}>30</span>s</button>
                <button className="btn-breakTime"><span  onClick={handleBreakTime}>40</span>s</button>
                <button className="btn-breakTime"><span  onClick={handleBreakTime}>50</span>s</button>
        </div>
        <h3>Exercise Details</h3>
        <div className='Exercise-container'>
            <div className='Exercise-time '>
               <p><strong>Exercise time     </strong></p> 
               <p>{exerciseTime}</p>
            </div>
            
            <div className='break-time-container'>
            <div className='break-time'>
               <p><strong>Break time     </strong></p> 
               <p>{breakTime}</p>
            </div>
            </div>
            </div>

             <div>
                <button className="btn-completed">Activity Completed</button>
             </div>
        
        </div>
    );
};

export default AddABreak;