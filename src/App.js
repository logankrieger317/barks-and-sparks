import React from 'react';
import './App.css';
import './Icons.css'
import Header from './Header';
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
import Chat from './Chat';
import Card from './Card';
import SwipeButtons from './SwipeButtons';




function App() {
  return (
    <>
    <div className="App">
    <Header/> 
    <BrowserRouter>
      <Routes>
        <Route path='/profile' element={<div>Profile</div>}/>
        <Route path='/chat'  element={<Chat />}/>
        <Route path='/' element={<Card/>}/>
        
       
      </Routes>
    </BrowserRouter>
    </div>
    <SwipeButtons />
    </>
  );
}

export default App;

