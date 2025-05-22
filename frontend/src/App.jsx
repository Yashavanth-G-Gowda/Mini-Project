import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import NotificationPage from './pages/NotificationPage';

const App = () => {
    return (
        <Router>
			<Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/notifications" element={<NotificationPage />} />
            </Routes>
        </Router>
    );
};

export default App;
