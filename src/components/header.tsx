import { useState } from 'react';
import { useRouter } from 'next/router';
import { zen } from '../pages/_app';

interface HeaderProps {
  show: boolean;
}

const Header = ({ show }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setIsDarkMode(newTheme === 'dark');
    console.log(`Theme changed to ${newTheme}`);
  };

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <header className={`main-header ${show ? 'show' : ''} flex justify-between items-center p-4 transition-colors duration-300`} style={{ backgroundColor: 'var(--header)' }}>
      <div className="flex items-center">
        <a href="#" onClick={navigateToHome}>
          <h1
            className={`${zen.className} bg-white p-0 px-3 ml-5 inline-block`}
            style={{ letterSpacing: '0.2em', color: 'var(--header)', transition: 'color var(--transition-duration)', borderRadius: '3px', fontSize: '1.35rem' }}
          >
            LEIF HILL
          </h1>
          <h1
            className={`${zen.className} p-1 inline-block ml-2`}
            style={{ letterSpacing: '0.1em', color: 'white', fontSize: '1.4rem' }}
          >
            software engineer
          </h1>
        </a>
      </div>
      <div className={`p-2 mr-3 rounded-full shadow-lg inline-block transition-colors duration-300 ${isDarkMode ? 'bg-[#33333F]' : 'bg-white'}`}>
        <button onClick={toggleTheme} className="shadow-sm" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={isDarkMode ? '/moon.svg' : '/sun.svg'}
            alt="Toggle theme"
            style={{ width: '20px', height: '20px' }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
