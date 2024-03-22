import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BlogForm from './pages/blog/create/BlogForm';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/test",
    element: <BlogForm />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
