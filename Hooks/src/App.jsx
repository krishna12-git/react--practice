// import React, { useState } from 'react'

// const App = () => {

//     const [num, setnum] = useState(0)

//     function increaaeNum(){
//         setnum(num+1)
//     }

//      function decreaaeNum(){
//         setnum(num-1)
//     }

//     function jump5Num(){
//         setnum(num+5)
//     }
//   return (
//     <div>
//         <h1>{num} </h1>
//         <button onClick={increaaeNum}>increase</button>
//         <button onClick={decreaaeNum}>decrease</button>
//         <button onClick={jump5Num}> jump by 5</button>
//     </div>
//   )
// }


// export default App
// understanding usestate with example of counter

import React, {useState}from 'react'

const App = () => {

    const [person, setPerson] = useState({
        name: "krishna",
        age: 20
    });

    const changePerson = () => {
        setPerson({
            name: "Rahul",
            age: 25
        });
    };

    
  return (
    <div>
        <h1>Hi! {person.name} , {person.age} </h1>
        <button onClick={changePerson}>click</button>
    </div>
  )
}

export default App


