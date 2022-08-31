import React from 'react';
import './App.scss';
import Profile from "./components/Profile/Profile";
import {Routes, Route, Navigate} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/profile/:id'} element={<Profile />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
