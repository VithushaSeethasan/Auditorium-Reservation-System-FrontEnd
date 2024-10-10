import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentWorkFlow from './components/PaymentWorkFlow/PaymentWorkFlow'; 
import Payment from './components/PaymentWorkFlow/Payment'; 
import SignIn from './components/Auth/SignIn'
import Form from './components/Form/SubmissionForm'        

const stripePromise = loadStripe('pk_test_51NTgKRAaWvD0FBmzmVquePz9uFILsjLUYey7pNiY4zIiKVyuzhYAPMdWg7USuiUujmsRvNUC1H14x666RiZKa53g00xLyoEIOj');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/payment" element={<PaymentWorkFlow />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/form" element={<Form />} />

        <Route
          path="/payment/:reservationId/:amount/:paymentType"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
