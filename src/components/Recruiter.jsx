import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import tataLogo from '../assets/img/tcslogo.png';
import tcsCboLogo from '../assets/img/tcslobo.png';
import googleLogo from '../assets/img/google-logo.png';
import microsoftLogo from '../assets/img/microsoft-logo.png';
import capgeminiLogo from '../assets/img/capgemini-logo.png';
import amazonLogo from '../assets/img/amazon-logo.png';
import boschlogo from '../assets/img/bosch.jpg'
import coglogo from '../assets/img/Cognizant.jpg'
import dellogo from '../assets/img/deloitte.jpg'
import herologo from '../assets/img/hero.jpg'
import jplogo from '../assets/img/JPMorgan1.jpg'
import ltlogo from '../assets/img/L and T.jpg'
import rbslogo from '../assets/img/RBS.jpg'
import sbilogo from '../assets/img/SBI.jpg'
import wblogo from '../assets/img/The World Bank.jpg'
import trlogo from '../assets/img/Thomson Reuters.jpg'
import jiologo from '../assets/img/jio.jpg'
import mahlogo from '../assets/img/mahindra rise.jpg'

const RecruiterCarousel = () => {
  const logos = [
    {
      src: tataLogo,
      alt: 'Tata Consultancy Services'
    },
    {
      src: tcsCboLogo,
      alt: 'TCS CBO'
    },
    {
      src: googleLogo,
      alt: 'Google'
    },
    {
      src: microsoftLogo,
      alt: 'Microsoft'
    },
    {
      src: capgeminiLogo,
      alt: 'Capgemini'
    },
    {
      src: amazonLogo,
      alt: 'Amazon'
    },
    {
      src: boschlogo,
      alt: 'Bosch'
    },
    {
      src: coglogo,
      alt: 'Microsoft'
    },
    {
      src: dellogo,
      alt: 'Delloite'
    },
    {
      src: herologo,
      alt: 'Hero'
    },
    {
      src: jplogo,
      alt: 'JP Morgan'
    },
    {
      src: ltlogo,
      alt: 'L and T'
    },
    {
      src: rbslogo,
      alt: 'RBS'
    },
    {
      src: sbilogo,
      alt: 'SBI'
    },
    {
      src: wblogo,
      alt: 'The World Bank'
    },
    {
      src: trlogo,
      alt: 'Thomas Reuters'
    },
    {
      src: jiologo,
      alt: 'JIO'
    },
    {
      src: mahlogo,
      alt: 'Mahindra Rise'
    },

  ];

  // Split logos into chunks of 3
  const groupedLogos = [];
  for (let i = 0; i < logos.length; i += 3) {
    groupedLogos.push(logos.slice(i, i + 3));
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '20px', marginBottom:"30px",fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;" }}>
      <h2 style={{ marginBottom: '40px', fontSize: '35px', color:"#002060"}}>Prime Recruiters</h2>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        emulateTouch={true}
      >
        {groupedLogos.map((group, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
            {group.map((logo, index) => (
              <div
                key={index}
                style={{
                  width: '200px',
                  height: '120px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '2px solid #ddd',
                  padding: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecruiterCarousel;
