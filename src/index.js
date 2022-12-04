import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider 
    options={{
      "client-id": process.env.REACT_APP_PAYPAL_ID,
      "currency": "USD"
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PayPalScriptProvider>
);

