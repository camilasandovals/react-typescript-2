import React from 'react';
import logo from './logo.svg';
import Form from './components/Form';
import './App.css';
import '@picocss/pico'

function App() {
  return (
    <>
      <div className="App">
        <header className="container">
          <Form />
        </header>
      </div>
    </>
  );
}

export default App;
