import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './App.css'

function App () {
  const [data, setData] = useState({})

  async function fetchData (params) {
    try {
      const { data } = await axios.get(`http://localhost:3001/`)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   axios.get(`https://kitsu.io/api/edge/categories`).then(({ data }) => {
  //     setData(data.data)
  //   })
  // }, [])

  return (
    <div>
      <h1>Welcome to anime app</h1>
      <button onClick={() => fetchData()}>Fetch anime</button>
      <div className='list'>
        {/* {data.length ? (
          data.map(({ attributes: item }) => (
            <div style={{ padding: '2rem' }} className='item_container'>
              <div>{item.titles.en}</div>
              <div>{item.synopsis}</div>
            </div>
          ))
        ) : (
          <div />
        )} */}
      </div>
    </div>
  )
}

export default App
