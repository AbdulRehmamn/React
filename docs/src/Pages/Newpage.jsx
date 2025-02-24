import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'; // Adjust path if needed
import Client from './Clientreview';
import Howitwork from './Howitwork';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../index.css';

// Layout component with Navbar and Footer wrapping the children content.
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

// Define your routes.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><App /></Layout>,
  },
  {
    path: '/Clientreview',
    element: <Layout><Client /></Layout>,
  },
  {
    path: '/Howitwork',
    element: <Layout><Howitwork /></Layout>,
  }
]);

// Render the RouterProvider which handles the routes.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
