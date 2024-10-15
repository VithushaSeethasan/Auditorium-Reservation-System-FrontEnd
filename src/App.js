import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import NotificationPage from './components/StatusMessages'; 
import BookingPage from './components/Booking'; 
import EventPage from './components/EventCalendar'; 
import './App.css';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('Dashboard'); // Default active section

  // Function to handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Custom component to conditionally show Sidebar based on the route
  function MainLayout() {
    const location = useLocation(); 

    return (
      <div className="main-content">
        {/* Conditionally render Sidebar */}
        {location.pathname !== '/notifications' && (
          <Sidebar onSectionChange={handleSectionChange} /> 
        )}

        <Content activeSection={activeSection} /> {/* Pass the active section to Content */}
      </div>
    );
  }

  return (
    <Router> {/* Wrap your app with the Router */}
      <div className="app">
        <Header />
        
        <Routes>
          <Route path="/" element={<MainLayout />} /> {/* Main layout with Sidebar and Content */}
          <Route path="/notifications" element={<NotificationPage />} /> {/* Notification page without Sidebar */}
          <Route path="/booking" element={<BookingPage />} /> 
          <Route path="/event" element={<EventPage />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
