import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';
import EventCategoryPage from './pages/EventCategoryPage';
import Timeline from './pages/Timeline';
import Accommodation from './pages/Accommodation';

// Layout Component to Wrap Pages
const Layout = ({ children }) => (
  <div className="w-full min-h-screen bg-bgwebsite bg-cover bg-center bg-fixed flex flex-col items-center font-ibm-plex-condensed">
    {children}
  </div>
);

// Define Routes
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Homepage />
      </Layout>
    ),
  },
  {
    path: '/Sponsors',
    element: (
      <Layout>
        <Sponsors />
      </Layout>
    ),
  },
  {
    path: '/Gallery',
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: '/Timeline',
    element: (
      <Layout>
        <Timeline />
      </Layout>
    ),
  },
  {
    path: '/Accommodation',
    element: (
      <Layout>
        <Accommodation />
      </Layout>
    ),
  },
  {
    path: '/category/:category',
    element: (
      <Layout>
        <EventCategoryPage />
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
