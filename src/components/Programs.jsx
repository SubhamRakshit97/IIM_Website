import React, { useState } from 'react';
import '../assets/program.css';
import mba from '../assets/img/mba.png';
import mbahr from '../assets/img/mbahr.png';
import pgpbm from '../assets/img/pgpbm.png';
import phd from '../assets/img/phd.png';
import exphd from '../assets/img/exphd.png';

const programs = [
  {
    category: 'PGPM',
    programs: [
      { name: 'MBA', image: mba, description: 'The two-year full-time Post Graduate Programme in Management (PGPM) is the flagship programme of IIM Tiruchirappalli .' },
      { name: 'MBA-HR', image: mbahr, description: 'Post-Graduate Programme in Management-Human Resources (PGPM-HR) is a two-year full-time residential programme launched in 2020.' },
    ],
  },
  {
    category: 'PGPBM',
    programs: [
      { name: "Executive's MBA", image: pgpbm, description: 'IIM Tiruchirappalli launched the PGPBM programme at its Chennai campus to groom working executives who aspire to move into senior leadership roles.' },
    ],
  },
  {
    category: 'Doctoral Programme',
    programs: [
      { name: 'Ph.D', image: phd, description: 'The Doctoral Programme in Management is a full-time doctoral programme that offers students opportunities for research in different areas of Management.' },
    ],
  },
  {
    category: 'Executive Doctoral Programme',
    programs: [
      { name: 'Executive Ph.D', image: exphd, description: 'IM Tiruchirappalli’s Executive Ph.D. is a non-residential doctoral programme designed for senior executives for academic research' },
    ],
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState({
    category: 'PGPBM',
    program: "Executive's MBA",
    image: pgpbm,
    description: 'IIM Tiruchirappalli launched the PGPBM programme at its Chennai campus to groom working executives who aspire to move into senior leadership roles.',
  });

  const handleProgramClick = (category, program, image, description) => {
    setSelectedProgram({ category, program, image, description });
  };

  return (
    <div className="programmes-container">
      <h1 className="main-heading">IIM Tiruchirapalli Programmes Highlights</h1>
      <div className="programmes-sidebar">
        {programs.map((section) => (
          <div key={section.category}>
            <div className="programmes-category">{section.category}</div>
            <ul>
              {section.programs.map((prog) => (
                <li
                  key={prog.name}
                  className={selectedProgram.program === prog.name ? 'active' : ''}
                  onClick={() =>
                    handleProgramClick(section.category, prog.name, prog.image, prog.description)
                  }
                >
                  {prog.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="programmes-content">
        <img src={selectedProgram.image} alt={selectedProgram.program} className="programmes-image" />
        <div className="programmes-text">
          <h2>Post Graduate Programme in {selectedProgram.program}</h2>
          <p>{selectedProgram.description}</p>
          <div className="programmes-buttons">
            <button className="read-more-button">READ MORE</button>
            <button className="admission-button">ADMISSION</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
