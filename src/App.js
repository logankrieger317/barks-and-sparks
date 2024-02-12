import React from 'react';
import './App.css';
import './Css/Icons.css'
import Header from './Components/Header';
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
import Chat from './Components/Chat';



function App() {
  return (
    <div className="App">
    <Header/> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>}/>
        <Route path='/profile' element={<div>Profile</div>}/>
        <Route path='/chat'  element={<Chat />}/>
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;

{/* Dating card */}

{/* button menu below */}

{/* messages screen */}

{/* individual message */}