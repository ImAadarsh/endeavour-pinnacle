import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Loading from './components/Loading';
import  Divider  from './components/Divider.jsx';
import Navigation from './components/Navigation.jsx';
import Product from './components/Product.jsx';
import Industry from './components/Industry.jsx';
import Bfsi from './components/Bfsi.jsx';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo.jsx';
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
    <BackgroundVideo></BackgroundVideo>
    {loading ? 
    (<Loading></Loading>) : 
    ( <>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/start" element={<Divider />}></Route>
          <Route exact path="/start/product" element={<Product />}></Route>
          <Route exact path="/start/industry" element={<Industry />}></Route>
          <Route exact path="/start/industry/*" element={<Bfsi />}></Route>
        </Routes>
        <Footer></Footer>
      </>      
    )}
    </div>
  );
}

export default App;
