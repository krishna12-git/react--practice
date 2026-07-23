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

// ***************************************************************************************************
 
// eg of changing your name by clicking by using if else statement

// import React, {useState} from 'react'

// const App = () => {

//     const [person, setPerson] = useState({
//         name: "Krishna",
//         age: 20
//     });

//     const changePerson = () => {

//         if (person.name === "Krishna"){
//             setPerson({
//             name: "Rahul",
//             age: 25
//         });
//         } else {
//             setPerson({
//                 name: "Krishna",
//                 age: 20,
//             });
//         }
       
//     };

    
//   return (
//     <div>
//         <h1>Hi! {person.name} , {person.age} </h1>
//         <button onClick={changePerson}>click</button>
//     </div>
//   )
// }

// export default App
// ***************************************************************************************************************************************************************************************************************************************************

import React, { useState } from 'react'

const App = () => {

    const [num, setNum] = useState({user:'krishna',age:20})
    
    const btnClicked = () => {
        const newNum = {...num};
        newNum.user = 'Aman'
        newNum.age = 23
        setNum(newNum)

    }


  return (
    <div>
        <h1> {num.user}, {num.age}</h1>
        <button onClick={btnClicked}>click</button>
     </div>
  )
}

export default App
