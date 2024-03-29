import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Customer/Profile';
import FuelForm from './components/Customer/FuelForm';
import History from './components/Customer/History';
import ContactUs from './components/Customer/Feedback';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<ContactUs />} />
            <Route path="/history" element={<History />} />
            <Route path="/fuelrequest" element={<FuelForm />} />
        </Routes>
    );
}

export default AppRouter;
