import { useState, useEffect } from 'react';
import Header from '../components/header';
import LandingBG from '../components/landingbg';
import Footer from '../components/footer';
import LandingHeader from '../components/landingheader';
import Placeholder from '@/components/placeholder';
import Landing from '@/components/landing';

const Home = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
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

  return (
    <>
      <LandingHeader />
      <Header show={showHeader} />
      <Landing />
      <LandingBG />
      <Placeholder />
      <Placeholder />
      <Footer />
    </>
  );
};

export default Home;