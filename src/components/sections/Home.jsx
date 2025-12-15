import { SocialLinks } from '../SocialLinks';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 leading-tight">
          Hello, I'm <span className="text-blue-400">Sashank</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          A passionate developer creating digital experiences that matter
        </p>
        <div className="flex flex-col gap-6 justify-center items-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
