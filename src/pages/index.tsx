import { useState, useEffect } from 'react';
import Header from '../components/header';
import LandingBG from '../components/landingbg';
import Footer from '../components/footer';
import LandingHeader from '../components/landingheader';
import Placeholder from '@/components/placeholder';
import Landing from '@/components/landing';
import Placeholder1 from '@/components/placeholder1';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return /Mobi|Android/i.test(window.navigator.userAgent);
  }
  return false;
};

const Home = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());

    const handleScroll = () => {
      const landingHeaderHeight = document.getElementById('landing-header')?.offsetHeight || 0;
      if (window.scrollY > landingHeaderHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isMobileDevice) {
    return (
      <>
        <LandingHeader />
        <Header show={showHeader} />
        <Landing />
        <LandingBG />
        <Placeholder1 />
        <Footer />
      </>
    );
  }

  return (
    <>
      <LandingHeader />
      <Header show={showHeader} />
      <Landing />
      <LandingBG />
      <Placeholder />
      <Footer />
    </>
  );
};

export default Home;