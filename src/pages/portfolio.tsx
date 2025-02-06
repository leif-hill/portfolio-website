import { useState, useEffect } from 'react';
import Header from '../components/header';
import HeaderMobile from '../components/headermobile';
import Footer from '../components/footer';
import PortfolioPage from '../components/portfoliopage';
import PortfolioPageMobile from '@/components/portfoliopagemobile';

const isMobile = () => {
  if (typeof window !== 'undefined') {
    return /Mobi|Android/i.test(window.navigator.userAgent);
  }
  return false;
};

const Portfolio = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  if (isMobileDevice) {
    return (
      <>
        <HeaderMobile show={true} />
        <PortfolioPageMobile />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header show={true} />
      <PortfolioPage />
      <Footer />
    </>
  );
};

export default Portfolio;