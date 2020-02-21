import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("http://wp-rest.alwaysdata.net/wp-json/")
    .then(response => response.json())
    .then(data => setData(data))
  }, []);
  
  if (!data) {
    return <div>Loading</div> 
    
  }
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.name}</h1>
        <h2>{data.description}</h2>
      </header>
    </div>
  );
}

export default App;
