import React from 'react'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './App.css'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'
import Questions from './Components/Questions/Questions'
import Review from './Components/Review/Review'
import Subscribe from './Components/Subscribe/Subscribe'
const App = () => { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Middle",
      element: <Middle/>
    },

    {
      path: "/Destinations",
      element: <Destinations/>
    },
    {
      path: "/Review",
      element: <Review/>
    },
    {
      path: "/Portfolio",
      element: <Portfolio/>
    },
    {
      path: "/Middle",
      element: <Middle/>
    },
    {
      path: "/Footer",
      element: <Footer/>
    },
    
  ])

  return ( 
    <>
      <Navbar/>
      <RouterProvider router = {router}/>
      {/* <Middle/> */}
      <Home/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Review/>
      {/* <Questions/> */}
      {/* <Subscribe/> */}
      <Footer/>

    </> 
  ); 
};

export default App
