import React from 'react'

const App = () => {

const submitHandler = (e) => {
  e.preventDefault() // without preventDefaulter the page will refresh and everything will disappear
  console.log('form submitted');
  
}  
  return (
    <div>
      <form  onSubmit={(e) => 
        submitHandler(e)
      }>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
        </form>
      </div>
  )
}

export default App