import { kanit } from '../../pages/_app';

const MyBetesAlt = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg m-4 flex" style={{ aspectRatio: '18/6', border: '5px solid var(--header)' }}>
        <div className="w-1/2 px-6 py-4 flex flex-col justify-center" style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}>
          <div className="flex flex-col justify-center flex-1">
            <div className={`${kanit.className} font-bold text-2xl mb-2`} style={{ color: 'var(--foreground)' }}>Study Tracker</div>
            <p className={`${kanit.className} text-base`} style={{ color: 'var(--foreground)' }}>
            A Python CLI tool that helps users track study habits, visualize progress, and stay motivated with predictive insights and a streak tracker.
            </p>
            <div className="pt-4">
              <a href="https://github.com/leif-hill/study-tracker" target="_blank" rel="noopener noreferrer" className="button inline-block font-bold py-2 px-4 rounded">
                View Project
              </a>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap">
            <span className="tag">Python</span>
            <span className="tag">AI/ML</span>
            <span className="tag">Pandas</span>
            <span className="tag">NumPy</span>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center" style={{ backgroundColor: 'var(--header)', paddingLeft: '0.3rem' }}>
          <img className="object-contain" src="/studytracker.png" alt="MyBetes" style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default MyBetesAlt;
