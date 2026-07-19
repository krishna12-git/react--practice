import React from 'react'
import Example1 from './Function/Example1';

const App = () => {
  
   function inputChanging(val){
    console.log(val);
   }
  return (
    <div>
      <input
       onChange={function(elem){
        inputChanging(elem.target.value)
       }}
      type="text"
      placeholder='Enter name' />

      <Example1 />


      
    </div>
  )
}

export default App