import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroMain from "../assets/imageCarousel/hero.jpg";
import Deadpool from "../assets/imageCarousel/deadpool.jpg";
import Ironman from "../assets/imageCarousel/ironman.jpg";
import Spiderman from "../assets/imageCarousel/spiderman.jpg";
import Wolverine from "../assets/imageCarousel/wolverine.jpeg";
import Hulk from "../assets/imageCarousel/Hulk.jpg";

export const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const heroSlider = [
    {
      image: HeroMain,
      title: "Welcome to the Marvel Universe",
      subtitle: "Discover the Legends",
    },
    {
      image: Deadpool,
      title: "Deadpool is Here!",
      subtitle: "Expect the unexpected",
    },
    {
      image: Ironman,
      title: "Ironman Takes Flight",
      subtitle: "Genius, Billionaire, Hero",
    },
    {
      image: Spiderman,
      title: "Spider-Man Swings In",
      subtitle: "Your Friendly Neighborhood Hero",
    },
    {
      image: Wolverine,
      title: "Wolverine Unleashed",
      subtitle: "Claws and Fury",
    },
    { image: Hulk, title: "Hulk Smash!", subtitle: "Strength Beyond Limits" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...sliderSettings}>
        {heroSlider.map((slide, i) => (
          <div key={i} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h1 className="text-5xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white mt-4">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
