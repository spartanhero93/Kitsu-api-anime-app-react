import React, { useState } from 'react'
import axios from 'axios'
// import logo from './logo.svg';
import './App.css'

function App () {
  const [id, setId] = useState('')
  const [anime, setAnime] = useState({})

  async function fetchData (type) {
    try {
      if (type === 'single') {
        const { data } = await axios.get(`http://localhost:3001/getAnime/${id}`)
        setAnime(await data)
      } else {
        const { data } = await axios.get(`http://localhost:3001/getAllAnime`)
        console.log(data)
      }
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
      <h4>{id}</h4>
      <input type='text' onChange={e => setId(e.target.value)} />
      <button onClick={() => fetchData('single')}>Fetch anime</button>
      <button onClick={() => fetchData('all')}>Fetch anime in DB</button>
      <button onClick={() => console.log(anime)}>Get State</button>
      <div className='list'>
        {Object.entries(anime).length !== 0 && anime.constructor === Object ? (
          <div>
            <span>
              <h2>{anime.name}</h2> {anime.type}
            </span>
            <p>{anime.background.toString()}</p>
            <p>This anime aired on {anime.aired}</p>
            <p>This anime has {anime.status}</p>
            <ul>
              Producers:{' '}
              {anime.producers.forEach(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default App
