import { MdOutlineAppShortcut } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 py-16 sm:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center justify-center sm:items-start">
            <p className="text-md mb-3 font-semibold text-primary sm:text-lg">
              Fast, Reliable, and Right at Your Fingertips
            </p>
            <h1 className="text-center text-3xl font-bold leading-tight text-accent sm:text-start sm:text-4xl md:text-5xl">
              {/* Meet */} <span className="text-primary">Baato Mechanic</span>—Your Roadside Lifesaver!
            </h1>
            <p className="mt-3 text-center text-xl font-medium text-gray-500 sm:text-start sm:text-2xl md:text-3xl">
              Stranded? Stuck? Need repairs? We bring the workshop to you.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="flex w-max items-center rounded-md border-2 border-gray-500 px-5 py-3 text-sm font-bold text-accent transition-all duration-200 hover:border-primary hover:text-primary"
              >
                <FaGooglePlay className="me-3 text-lg" />
                <span>GET IT ON GOOGLE PLAY</span>
              </Link>
              <button
                className="flex w-max cursor-not-allowed items-center rounded-md border-2 border-gray-300 bg-gray-200 px-5 py-3 text-sm font-bold text-gray-500"
                disabled
              >
                <FaApple className="me-3 text-lg" />
                <span>COMING SOON TO APP STORE</span>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src="/assets/bm_icon.png"
              alt="Baato Mechanic - Your Roadside Rescue"
              className="max-h-60 w-full object-contain sm:max-h-80 md:max-h-124"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
