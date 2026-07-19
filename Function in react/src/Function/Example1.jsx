import React from 'react'

const Example1 = () => {


    const scrolling = (elem) =>{
        if(elem > 0){
          console.log('scrolling');
        } else{
            console.log('Revrse scrolling');
            
        }
       

    }
  return (
    <div onWheel={(elem)=>{
        scrolling(elem.deltaY)
    }}>
        <div className="page1 h-screen bg-amber-300"></div>
<div className="page2 h-screen bg-blue-400"></div>
<div className="page3 h-screen bg-red-400"></div>
</div>
  )
}

export default Example1