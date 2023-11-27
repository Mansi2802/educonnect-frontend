import React from 'react';
import { Route,Routes } from "react-router-dom";
import Home from './routes/Home';
import Discussions from './routes/Discussions';
import Events from './routes/Events';
import Login from './routes/Login';
import Contact from './routes/Contact';
import Coding from './routes/Coding';
import Assignments from './routes/Assignments';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discussions" element={<Discussions/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/assignments" element={<Assignments/>} />
        <Route path="/coding" element={<Coding/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  );
}

export default App;
