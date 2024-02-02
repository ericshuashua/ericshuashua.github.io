import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './global-variable.scss';
import Home from './pages/Home/Home';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
