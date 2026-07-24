// import React from 'react'

// const App = () => {

  

// const submitHandler = (e) => {
//   e.preventDefault() // without preventDefaulter the page will refresh and everything will disappear
//   console.log('form submitted');
  
// }  
//   return (
//     <div>
//       <form  onSubmit={(e) => 
//         submitHandler(e)
//       }>
//         <input type="text" placeholder='Enter your name' />
//         <button>Submit</button>
//         </form>
//       </div>
//   )
// }

// export default App

// ***************************************************************************************************************


//  practicing, when i clicked on submit btn in console i should see the welcome+name

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")

  const btnClicked = (e) => {
    e.preventDefault();
    console.log("Welcome", name);  
    setName('')
  }

  return (
    <div>
      <form onSubmit={btnClicked}>
         <input type="text" placeholder='Enter your name'
         value={name}
         onChange={(e) => setName(e.target.value)}  
         />
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App