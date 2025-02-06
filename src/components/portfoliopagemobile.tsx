import { useState } from 'react';
import { kanit } from '../pages/_app';
import CSProjects from './csprojects';
import MiscProjects from './miscprojects';

const PortfolioPageMobile = () => {
  const [showCSProjects, setShowCSProjects] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const toggleProjects = () => {
    setFadeIn(true);
    setShowCSProjects(!showCSProjects);
    setTimeout(() => setFadeIn(false), 800); // Reset fade-in state after animation duration
  };

  return (
    <div className="transition-colors duration-300" id="placeholder" style={{ backgroundColor: 'var(--background)', padding: '2rem', margin: '0 1rem', paddingTop: '4rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '1rem', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <h1 className={`${kanit.className}`} style={{ fontSize: '2rem', color: 'var(--foreground)', textAlign: 'left', marginRight: '1rem' }}>
            Portfolio
          </h1>
          <div className="toggle-switch" onClick={toggleProjects} style={{ marginTop: '0.2rem' }}>
            <input type="checkbox" checked={showCSProjects} readOnly />
            <span className="slider">
              {showCSProjects ? (
                <span className={`slider-text-left ${fadeIn ? 'fade-in' : ''}`}>CS</span>
              ) : (
                <span className={`slider-text-right ${fadeIn ? 'fade-in' : ''}`}>Misc</span>
              )}
            </span>
          </div>
        </div>
        <h1 className={`${kanit.className}`} style={{ fontSize: '1rem', color: 'var(--foreground)', textAlign: 'left' }}>
          A showcase of my skills and experience in software development, data analysis, and problem-solving, with a section for creative and miscellaneous projects.
        </h1>
      </div>
      {showCSProjects ? <CSProjects /> : <MiscProjects />}
    </div>
  );
};

export default PortfolioPageMobile;
