import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {action,originals} from './Urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action Movies' isSmall/>
    </div>
  );
}

export default App;
