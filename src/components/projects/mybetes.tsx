import { kanit } from '../../pages/_app';

const MyBetes = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg m-4 flex flex-col md:flex-row min-h-[300px] md:min-h-[380px]"
        style={{ border: '5px solid var(--header)', height: 'auto' }}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center" style={{ backgroundColor: 'var(--header)', padding: '0.3rem' }}>
          <img
            className="object-contain w-full h-auto md:w-auto md:h-full"
            src="/mybetes.gif"
            alt="MyBetes"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-2 md:px-6 md:py-4 flex flex-col justify-center" style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}>
          <div className="flex flex-col justify-center flex-1">
            <div className={`${kanit.className} font-bold text-sm md:text-2xl mb-2`} style={{ color: 'var(--foreground)' }}>
              MyBetes
            </div>
            <p className={`${kanit.className} text-xs md:text-sm`} style={{ color: 'var(--foreground)' }}>
              An AI-powered meal management tool that uses computer vision to analyze food photos, estimate glycemic index, and provide personalized advice for diabetics.
            </p>
            <div className="pt-4">
              <a
                href="https://devpost.com/software/mybetes"
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-block font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap">
            <span className="tag">Hackathon Winner 🏆</span>
            <span className="tag">AI/ML</span>
            <span className="tag">Next.js</span>
            <span className="tag">Node.js</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Vercel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBetes;
