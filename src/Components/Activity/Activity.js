import React from 'react';
import './Activity.css'
const Activity = ({activity,exerciseTime,setExcerciseTime}) => {
const {picture,name,description,age,time}=activity


const handleExerciseTime=(e)=>{
e.target.innerText="Added"
e.target.disabled = true;
e.target.style.backgroundColor = "green"
e.target.style.color = "white"
    let  updatedExerciseTime=parseInt(time)
         console.log(updatedExerciseTime)
       
            updatedExerciseTime=exerciseTime+updatedExerciseTime
            setExcerciseTime(updatedExerciseTime)

}
    return (
        <div className='activity-container'> 
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{description.slice(0,80)}</p>
            <h6><small>For Age</small> :{age}</h6>
            <h6>Time required : {time}s</h6>
            <button className='btn-addToCart'   onClick={handleExerciseTime}>Add to list</button>
        </div>
    );
};

export default Activity;