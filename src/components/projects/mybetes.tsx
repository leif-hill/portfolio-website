import { kanit } from '../../pages/_app';

const MyBetes = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg m-4 flex" style={{ aspectRatio: '18/6', border: '5px solid var(--header)' }}>
        <div className="w-1/2 flex items-center justify-center" style={{ backgroundColor: 'var(--header)', paddingRight: '0.3rem' }}>
          <img className="object-contain" src="/mybetes.gif" alt="MyBetes" style={{ height: '100%' }} />
        </div>
        <div className="w-1/2 px-6 py-4 flex flex-col justify-center" style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}>
          <div className="flex flex-col justify-center flex-1">
            <div className={`${kanit.className} font-bold text-2xl mb-2`} style={{ color: 'var(--foreground)' }}>MyBetes</div>
            <p className={`${kanit.className} text-base`} style={{ color: 'var(--foreground)' }}>
              An AI-powered meal management tool that uses computer vision to analyze food photos, estimate glycemic index, and provide personalized advice for diabetics.
            </p>
            <div className="pt-4">
              <a href="https://devpost.com/software/mybetes" target="_blank" rel="noopener noreferrer" className="button inline-block font-bold py-2 px-4 rounded">
                View Project
              </a>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap">
            <span className="tag">Hackathon Winner🏆</span>
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
