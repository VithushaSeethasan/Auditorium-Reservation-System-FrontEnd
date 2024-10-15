<<<<<<< HEAD
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
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentWorkFlow from './components/PaymentWorkFlow/PaymentWorkFlow'; 
import Payment from './components/PaymentWorkFlow/Payment'; 
import SignIn from './components/Auth/SignIn'
import Form from './components/Form/SubmissionForm'     
import Notification from './components/Notification/Notification'    

const stripePromise = loadStripe('pk_test_51NTgKRAaWvD0FBmzmVquePz9uFILsjLUYey7pNiY4zIiKVyuzhYAPMdWg7USuiUujmsRvNUC1H14x666RiZKa53g00xLyoEIOj');
>>>>>>> b516fea45b9be30f6581daef599c596592710621

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
<<<<<<< HEAD
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
=======
    <Router>
      <Routes>
        <Route path="/payment" element={<PaymentWorkFlow />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/form" element={<Form />} />
        <Route path="/noti" element={<Notification />} />

        <Route
          path="/payment/:reservationId/:amount/:paymentType"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
>>>>>>> b516fea45b9be30f6581daef599c596592710621
    </Router>
  );
}

export default App;
