import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Project2 from './pages/Project2';
import { StickyContainer } from 'react-sticky';
import Workflow from './pages/Workflow'

const App = () => {
  const [showCards, setShowCards] = useState({
    card1: false,
    card2: false,
    card3: false,
  });

  useEffect(() => {
    setTimeout(() => setShowCards((prevShowCards) => ({ ...prevShowCards, card1: true })), 0);
    setTimeout(() => setShowCards((prevShowCards) => ({ ...prevShowCards, card2: true })), 500);
    setTimeout(() => setShowCards((prevShowCards) => ({ ...prevShowCards, card3: true })), 1000);
  }, []);

  return (
    <BrowserRouter>
      <StickyContainer>
        <div>
          <Routes>
            <Route path="/project" element={<Project2 />} />
            <Route path="/mgmt" element={<Workflow />} />
            <Route path="/" element={<Home showCards={showCards} />} />
          </Routes>
        </div>
      </StickyContainer>
    </BrowserRouter>
  );
};

export default App;
