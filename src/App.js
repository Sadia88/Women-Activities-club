import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activities,setActivities]=useState([])

  const [cart,setCart]=useState([])


  useEffect(()=>{
      fetch('activities.json')
      .then(res=>res.json())
      .then(data=>console.log(data))
  }
  
  ,[])
  return (
    <div >
    
    </div>
  );
}

export default App;
