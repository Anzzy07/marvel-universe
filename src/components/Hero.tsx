import HeroMain from "../assets/imageCarousel/Hero1.jpg";

export const Hero = () => {
  return (
    <div id="home" className="relative w-full h-[85vh]">
      <img
        src={HeroMain}
        alt="Hero"
        className="h-full w-full object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20">
        <div className="max-w-lg text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            It’s your universe, it’s time to save it
          </h1>
          <h2 className="mt-4 text-lg md:text-xl text-black font-medium drop-shadow-md">
            The Rebel Alliance is fighting to end the tyranny of evil. Join the
            resistance to create a better future for our children.
          </h2>

          <button className="mt-8 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-600">
            Choose Your Heros
          </button>
        </div>
      </div>
    </div>
  );
};
