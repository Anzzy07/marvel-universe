import { FeaturedCharacters } from "../components/FeaturedCharacters";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Pagination } from "../components/Pagination";
import { SearchCharacters } from "../components/SearchCharacters";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchCharacters />
      <FeaturedCharacters />
      <Pagination />
      <Footer />
    </>
  );
};
