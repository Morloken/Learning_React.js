import React from 'react'

const App = () => {
  const name = 'John';  
  const names = ['John', 'Jane', 'Bob'];

  // return <div className='text-5xl'>App</div>
  return <>
    <h1 className='text-5xl'>App</h1>
    <p>{name}</p>
    <ul>
      {names.map((name) => (
        <li>{name}</li>
        ))}
    </ul>
  </>
};

export default App

