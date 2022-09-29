import React, { useState } from 'react';
import './AddABreak.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const notify = () => {
        
        toast("Wow  Todays Activity is completed!");}
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
                <button className="btn-completed" onClick={notify}>Activity Completed</button>
                <ToastContainer />
             </div>
        
        </div>
    );
};

export default AddABreak;