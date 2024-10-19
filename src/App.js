import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js/Header'; // Check this path
import ImageSlider from './componenets/Slider/ImageSlider'; // Check this path
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main.js/Main';
import ProductDescription from './componenets/product/ProductDescription';
import Product from './componenets/product/Product';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path:"/",element:<Product />},
    {path:'description/:name',element:<ProductDescription />}
  ]);

  return (
    <>
      {/* Uncomment these when you want to use them */}
      {/* <Header /> */}
      {/* <ImageSlider /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;