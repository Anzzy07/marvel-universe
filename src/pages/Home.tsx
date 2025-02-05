import heroImage from "../assets/imageCarousel/hero.jpg";
import Logo from "../assets/Logo.png";

export const Home = () => {
  return (
    <div className="bg-marvel-dark-grey text-white min-h-screen">
      {" "}
      {/* Dark background, full screen height */}
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[800px] overflow-hidden">
        {" "}
        {/* Adjust height for different screen sizes */}
        <img
          src={heroImage}
          alt="Marvel Heroes"
          className="object-cover w-full h-full absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>{" "}
        {/* Dark overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src={Logo} alt="Marvel Logo" className="w-48 md:w-64 mb-4" />{" "}
          {/* Marvel Logo */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
            {" "}
            {/* Large, bold title */}
            Welcome to the Marvel Universe!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center drop-shadow-lg">
            Explore your favorite characters, discover new heroes, and dive into
            the world of Marvel.
          </p>
          <button className="bg-marvel-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
      {/* Featured Content (Example) */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Characters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Character cards would go here */}
          <div className="bg-gray-800 rounded-lg p-4">
            {/* Example Character Card */}
            <img
              src="character_image_1.jpg"
              alt="Character 1"
              className="rounded-lg mb-2"
            />
            <h3 className="text-xl font-bold">Spider-Man</h3>
            <p>Your friendly neighborhood hero.</p>
          </div>
          {/* ... more character cards */}
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-marvel-dark-grey py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Marvel Entertainment</p>
      </footer>
    </div>
  );
};
