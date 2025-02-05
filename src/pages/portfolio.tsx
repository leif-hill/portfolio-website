import Header from '../components/header';
import Footer from '../components/footer';
import PortfolioPage from '../components/portfoliopage';

const Portfolio = () => {
  return (
    <>
      <Header show={true} />
      <PortfolioPage />
      <PortfolioPage />
      <Footer />
    </>
  );
};

export default Portfolio;