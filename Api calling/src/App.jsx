import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([ ])

  const getData  = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getData}>get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h2>hello,{elem.author} {idx}</h2>
        })}
      </div>
    </div>
  )
}

export default App