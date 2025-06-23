import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './styles/main.scss';
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
