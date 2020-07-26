import React from 'react';
import './App.css';
import Navbar from './Components/Navigation/Navbar';
import Title from './Components/Title/Title';
import Description from './Components/Description/Description';
import Donors from './Containers/Donors';
import Partners from './Components/Partners/Partners';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Description />
      <Donors />
      <Partners />
    </div>
  );
}

export default App;
