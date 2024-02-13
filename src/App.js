import React from 'react';
import './App.css';
import './Css/Icons.css'
import Header from './Components/Header';
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
import Chat from './Components/Chat';
import Card from './Components/Card';
import SwipeButtons from './Components/SwipeButtons';




function App() {
  return (
    
    <div className="App">
    <Header/> 
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<div>Profile</div>}/>
        <Route path='/chat'  element={<Chat />}/>
        <Route path='/' element={<Card/>}/>
        {/* <Route path='/swipe' element={<SwipeButtons/>}/> */}
       
      </Routes>
    </BrowserRouter>
    <SwipeButtons/>
    
    </div>
    
  );
}

export default App;

{/* Dating card */}

{/* button menu below */}

{/* messages screen */}

{/* individual message */}