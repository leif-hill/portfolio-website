import { useRouter } from 'next/router';
import { kanit } from '../pages/_app';

const Landing = () => {
  const router = useRouter();

  const scrollToPlaceholder = () => {
    document.getElementById('placeholder')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToPortfolio = () => {
    router.push('/portfolio');
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9000, overflow: 'auto', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 className={`${kanit.className} text-white ml-5 text-5xl fade-in1`}>Hi, my name is Leif 👋</h1>
      <h2 className={`${kanit.className} fade-in1`} style={{ color: 'white', fontSize: '2rem', marginTop: '10px' }}>Let's get started!</h2>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <button
          onClick={scrollToPlaceholder}
          className="fade-in2"
          style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6757A2',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b7d5e8')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          About Me
        </button>
        <button
          onClick={navigateToPortfolio}
          className="fade-in2"
          style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6757A2',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b7d5e8')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          Projects
        </button>
        <button
          onClick={openResume}
          className="fade-in2"
          style={{
            padding: '10px 20px',
            backgroundColor: 'white',
            color: '#6757A2',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b7d5e8')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Landing;
