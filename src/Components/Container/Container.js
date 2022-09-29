import React, { useEffect, useState } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import './Container.css'

const Container = () => {
    const [activities,setActivities]=useState([])

    console.log(activities)
  
  
    useEffect(()=>{
        fetch('activities.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    }
    
    ,[])
    return (
        <div className='container'>
            <div className='left-section'>

                <LeftSection activities={activities}></LeftSection>
            </div>
            <div className='right-section'>
                <RightSection activities={activities}></RightSection>
            </div>
        </div>
    );
};

export default Container;