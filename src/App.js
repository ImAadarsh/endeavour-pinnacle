import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Loading from './components/Loading';
import  Divider  from './components/Divider.jsx';
import Product from './components/Product.jsx';
import Industry from './components/Industry.jsx';
import Bfsi from './components/Bfsi.jsx';
import BackgroundVideo from './components/BackgroundVideo.jsx';
import PinnaclesSolutions from './components/PinnaclesSolutions';
import ProductDemoVideo from './components/ProductDemoVideo';
import SolutionsBenefits from './components/SolutionsBenefits';
import ValueAddition from './components/ValueAddition';
import OurMerits from './components/OurMerits';
import CaseStudiesAndTestimonials from './components/CaseStudiesAndTestimonials';
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
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/start" element={<Divider />}></Route>
          <Route exact path="/start/product" element={<Product />}></Route>
          <Route exact path="/start/industry" element={<Industry />}></Route>
          <Route exact path="/start/1" element={<Bfsi />}></Route>
          <Route exact path="/start/2" element={<Product />}></Route>
          <Route exact path="/start/3" element={<PinnaclesSolutions />}></Route>
          <Route exact path="/start/4" element={<ProductDemoVideo />}></Route>
          <Route exact path="/start/5" element={<SolutionsBenefits />}></Route>
          <Route exact path="/start/6" element={<ValueAddition />}></Route>
          <Route exact path="/start/7" element={<OurMerits />}></Route>
          <Route exact path="/start/8" element={<CaseStudiesAndTestimonials />}></Route>
        </Routes>
      </>      
    )}
    </div>
  );
}

export default App;
