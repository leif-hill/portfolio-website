import { kanit } from '../../pages/_app';

const MyBetesAlt = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg m-4 flex flex-col md:flex-row min-h-[300px] md:min-h-[380px]"
        style={{ border: '5px solid var(--header)', height: 'auto' }}
      >
        {/* Text container: order-2 on mobile, order-1 on desktop */}
        <div
          className="order-2 md:order-1 w-full md:w-1/2 px-4 py-2 md:px-6 md:py-4 flex flex-col justify-center"
          style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}
        >
          <div className="flex flex-col justify-center flex-1">
            <div
              className={`${kanit.className} font-bold text-sm md:text-2xl mb-2`}
              style={{ color: 'var(--foreground)' }}
            >
              Study Tracker
            </div>
            <p
              className={`${kanit.className} text-xs md:text-sm`}
              style={{ color: 'var(--foreground)' }}
            >
              A Python CLI tool that helps users track study habits, visualize progress, and stay motivated with predictive insights and a streak tracker.
            </p>
            <div className="pt-4">
              <a
                href="https://github.com/leif-hill/study-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-block font-bold py-2 px-4 rounded"
              >
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
        {/* Image container: order-1 on mobile, order-2 on desktop */}
        <div
          className="order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center"
          style={{ backgroundColor: 'var(--header)', paddingLeft: '0.3rem' }}
        >
          <img
            className="object-contain w-full h-auto md:w-auto md:h-full"
            src="/studytracker.png"
            alt="Study Tracker"
          />
        </div>
      </div>
    </div>
  );
};

export default MyBetesAlt;
