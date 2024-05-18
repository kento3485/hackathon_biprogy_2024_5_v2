// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { initLiff } from './liff';
import RentalMenu from './components/RentalMenu';
import CreateRequest from './components/CreateRequest';
import ApplicationComplete from './components/ApplicationComplete';

const App = () => {
  useEffect(() => {
    initLiff();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/create-request" element={<CreateRequest />} />
        <Route path="/application-complete" element={<ApplicationComplete />} />
        <Route path="/" element={<RentalMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
