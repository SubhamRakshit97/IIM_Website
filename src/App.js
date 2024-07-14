import React from 'react';
import './assets/style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import VideoComponent from './components/VideoComponent';
import About from './components/Events';
import Marquee from './components/Marquee';
import RecruiterCarousel from './components/Recruiter';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <div>
          <Header/>
           <VideoComponent/>
           <Marquee/>
           <About/>
           <Dashboard/>
           <RecruiterCarousel/>
          <Footer/>
        </div>
    );
};

export default App;
