
import './App.css';

import data from './data'
import { useState} from 'react'
import Rewievs from './components/Rewievs'

function App() {

  const[people,setPeople]=useState(data)
  const[value,setValue]=useState(0)

  
    
  const checkNumber=(number)=>{
     if(number<0){
      return people.length-1
     }
     if(number>people.length-1){
      return 0
     }
     return number
  }

  return (
    <div className='container'>
       <div className="header">
        <span className='slash'>/</span> <h1>Rewievs</h1>
       </div>
       <Rewievs people={people} value={value} setValue={setValue} checkNumber={checkNumber} />
      
    </div>
  );
}

export default App;
