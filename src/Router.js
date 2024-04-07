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
// import History from './components/Customer/History';
import Feedback from './components/Customer/Feedback';
import TyreForm from './components/Customer/TyreForm';
import TowForm from './components/Customer/TowForm';
import BatteryForm from './components/Customer/BatteryForm';
import TowReply from './components/Mechanic/TowReply';
import TyreReply from './components/Mechanic/TyreReply';
import FuelReply from './components/Mechanic/FuelReply';
import BatteryReply from './components/Mechanic/BatteryReply';
import TowHistory from './components/Customer/History/TowHistory';
import BatteryHistory from './components/Customer/History/BatteryHistory';
import FuelHistory from './components/Customer/History/FuelHistory';
import TyreHistory from './components/Customer/History/TyreHistory';

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
            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/history" element={<History />} /> */}

            <Route path="/fuelrequest" element={<FuelForm />} />
            <Route path="/tyrerequest" element={<TyreForm />} />
            <Route path="/towrequest" element={<TowForm />} />
            <Route path="/batteryrequest" element={<BatteryForm />} />
            
            <Route path="/towhistory" element={<TowHistory />} />
            <Route path="/batteryhistory" element={<BatteryHistory />} />
            <Route path="/tyrehistory" element={<TyreHistory />} />
            <Route path="/fuelhistory" element={<FuelHistory />} />

            <Route path="/towreply" element={<TowReply />} />
            <Route path="/tyrereply" element={<TyreReply />} />
            <Route path="/fuelreply" element={<FuelReply />} />
            <Route path="/batteryreply" element={<BatteryReply />} />

        </Routes>
    );
}

export default AppRouter;
