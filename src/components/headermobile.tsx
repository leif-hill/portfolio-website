import { useState } from 'react';
import { useRouter } from 'next/router';
import { zen } from '../pages/_app';

interface HeaderProps {
  show: boolean;
}

const HeaderMobile = ({ show }: HeaderProps) => {
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
      <div className="flex flex-col items-center">
        <a href="#" onClick={navigateToHome}>
          <h1
            className={`${zen.className} bg-white p-0 px-3 inline-block`}
            style={{ letterSpacing: '0.2em', color: 'var(--header)', transition: 'color var(--transition-duration)', borderRadius: '3px', fontSize: '0.6rem', textAlign: 'center' }}
          >
            LEIF HILL
          </h1>
          <h1
            className={`${zen.className} p-1 inline-block`}
            style={{ letterSpacing: '0.1em', color: 'white', fontSize: '0.6rem', textAlign: 'center' }}
          >
            software engineer
          </h1>
        </a>
      </div>
      <div className="flex items-center justify-end flex-1">
        <div className={`p-1 rounded-full shadow-lg inline-block transition-colors duration-300 ${isDarkMode ? 'bg-[#33333F]' : 'bg-white'}`}>
          <button onClick={toggleTheme} className="shadow-sm" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={isDarkMode ? '/moon.svg' : '/sun.svg'}
              alt="Toggle theme"
              style={{ width: '10px', height: '10px' }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
