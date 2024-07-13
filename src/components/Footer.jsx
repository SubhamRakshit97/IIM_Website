import React from 'react';
import FooterLogo from '../assets/img/Footer-logo.png'
const Footer = () => {
    return (
        <footer>
            <div className="grid">
               <section>
                <img src={FooterLogo} alt="IIM-Logo" className='footer-logo'/>
               </section>
               <section>
                <ul>
                <li><p>Notifications</p></li>
                 <li>Announcement</li>
                    <li>Admissions</li>
                    <li>Carrers</li>
                    <li>Tenders</li>
                    <li>Feedback</li>
                </ul>
               </section>
               <section>
               <ul>
                <li><p>Quick Links</p></li>
                 <li>Annual Reports</li>
                    <li>Admissions</li>
                    <li>NIRF</li>
                    <li>Centers of Excellence</li>
                    <li>Contacts</li>
                </ul>
               </section>
               <section>
               <ul>
                <li><p>More..</p></li>
                 <li>RTI</li>
                    <li>ICC</li>
                    <li>Educational Verification</li>
                    <li>Privacy</li>
                    <li>Life @IIM</li>
                </ul>
               </section>
            </div>
            <hr />
            <aside>
            Copyright © 2024 Indian Institute of Management Tiruchirappalli. All Rights Reserved. |  Sitemap | Hindi  
            </aside>
           
        </footer>
    );
};

export default Footer;
