import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Output from './components/Output';

function App() {
  const [finalValue, setFinalValue] = useState();

  const fx = (a) => {
    setFinalValue(parseInt(a, 2))
  }
  return(
    <>
      <Form cfx={fx}/>
      <Output otr={finalValue}/>
    </>
  )
}

export default App;