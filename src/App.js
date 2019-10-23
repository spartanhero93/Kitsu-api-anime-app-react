import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './App.css'

function App () {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`https://kitsu.io/api/edge/anime`).then(({ data }) => {
      setData(data.data)
    })
  }, [])

  return (
    <div>
      <h1>Welcome to anime app</h1>
      <button onClick={console.log(data)}>Fetch anime</button>
      <div className='list' />
    </div>
  )
}

export default App
