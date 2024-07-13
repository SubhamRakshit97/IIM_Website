import React from 'react';
import '../assets/Marquee.css'; // Import the CSS file

const Marquee = () => {
  return (
    <div className='marquee-main'>
      <div className="marquee-container">
        <div className="marquee-left">
          <p>Announcements</p>
        </div>
        <div className="marquee-right">
          <div className="marquee">
            <p>MBA Program (PGPBM) at Chennai Campus for Working Executives 2024 - 26 _ Apply Online</p>
            <p>MBA Program (PGPBM) at Chennai Campus for Working Executives 2024 - 26 _ Apply Online</p>
            <p>MBA Program (PGPBM) at Chennai Campus for Working Executives 2024 - 26 _ Apply Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
