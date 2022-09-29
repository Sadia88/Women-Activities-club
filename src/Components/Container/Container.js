import React, { useEffect, useState } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import './Container.css'

const Container = () => {
    const [activities,setActivities]=useState([])
    const [exerciseTime,setExcerciseTime]=useState(0)

    // console.log(activities)
  
  
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    }
    
    ,[])
    return (
        <div className='container'>
            <div className='left-section'>

                <LeftSection activities={activities} exerciseTime={exerciseTime} setExcerciseTime={setExcerciseTime}></LeftSection>
            </div>
            <div className='right-section'>
                <RightSection exerciseTime={exerciseTime} setExcerciseTime={setExcerciseTime} ></RightSection>
            </div>
        </div>
    );
};

export default Container;