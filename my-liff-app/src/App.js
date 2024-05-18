// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRecruitment from "./components/CreateRecruitment";
import ApplicationStatus from "./components/ApplicationStatus";
import UserProfile from "./components/UserProfile";
import RentalDetails from "./components/RentalDetails";
import SearchSettings from "./components/SearchSettings";
import Review from "./components/Review";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-recruitment" element={<CreateRecruitment />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/rental-details/:id" element={<RentalDetails />} />
        <Route path="/search-settings" element={<SearchSettings />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
};

export default App;
