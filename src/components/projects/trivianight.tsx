import { kanit } from '../../pages/_app';

const TriviaNight = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg m-4 flex flex-col md:flex-row min-h-[300px] md:min-h-[380px]"
        style={{ border: '5px solid var(--header)', height: 'auto' }}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center" style={{ backgroundColor: 'var(--header)', padding: '0.3rem' }}>
          <img
            className="object-contain w-full h-auto md:w-auto md:h-full"
            src="/trivianight.jpg"
            alt="MyBetes"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 py-2 md:px-6 md:py-4 flex flex-col justify-center" style={{ backgroundColor: 'var(--background)', paddingTop: '1rem' }}>
          <div className="flex flex-col justify-center flex-1">
            <div className={`${kanit.className} font-bold text-sm md:text-2xl mb-2`} style={{ color: 'var(--foreground)' }}>
              Atrioc Trivia Night Multimedia Project
            </div>
            <p className={`${kanit.className} text-xs md:text-sm`} style={{ color: 'var(--foreground)' }}>
              Developed and managed a trivia night segment for Twitch streamer{' '}
              <a
                href="https://www.youtube.com/@atrioc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-gray-800"  // Added styling for the link
              >
                Atrioc
              </a>
              , including video editing, graphic design, and a custom backend for question management.
            </p>
            <div className="pt-4">
              <a
                href="https://www.youtube.com/playlist?list=PLrFyReeHmOZSKbxs1yHFtBLMtuYYSA0rF"
                target="_blank"
                rel="noopener noreferrer"
                className="button inline-flex items-center font-bold py-2 px-4 rounded"
              >
                View Project
                <img
                  src="/youtube.svg"
                  alt="YouTube Icon"
                  className="ml-2 w-4 h-4 youtube-icon"
                />
              </a>
            </div>
          </div>
          <div className="pt-4 flex flex-wrap">
            <span className="tag">Professional Work</span>
            <span className="tag">DaVinci Resolve</span>
            <span className="tag">Photoshop</span>
            <span className="tag">Excel/Sheets</span>
            <span className="tag">Google Apps Script</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriviaNight;
