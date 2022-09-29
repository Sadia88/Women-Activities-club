import React, { useState } from 'react';
import './AddABreak.css'

const AddABreak = () => {
const [breakTime,setBreakTime]=useState(breakTime)

    const handleBreakTime=(e)=>{
        setBreakTime(e.target.innerText)
        console.log(breakTime)
    }
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-container'>
            
            <button className="btn-breakTime"><span  onClick={handleBreakTime}>10</span>s</button>
            <button className="btn-breakTime">20</button>
            <button className="btn-breakTime">30</button>
                <button className="btn-breakTime">40</button>
                <button className="btn-breakTime">50</button>
        </div>
        <h3>Exercise Details</h3>
        <div className='Exercise-container'>
            <div className='Exercise-time '>
               <p><strong>Exercise time     </strong></p> 
               <p>200 seconds</p>
            </div>
            
            <div className='break-time-container'>
            <div className='break-time'>
               <p><strong>Break time     </strong></p> 
               <p>15 seconds</p>
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