import React from 'react'

export default function ({ anime }) {
  return Object.entries(anime).length !== 0 && anime.constructor === Object ? (
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
  )
}
