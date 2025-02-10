import { useEffect, useState } from "react";
import { getCharacterData } from "../services/marvelAPI";
import { CharacterCard } from "./CharacterCard";
import type { CharacterDetails } from "../types/Characters";
import { Loader } from "./Loading";

export const RecommendCharacter = () => {
  const [recommendCharacter, setRecommendCharacter] = useState<
    CharacterDetails[]
  >([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchRecommendedHeroes = async () => {
      setLoading(true);
      try {
        const response = await getCharacterData("");

        //Filtering the characters that doesn't have any images
        const filteredCharacters = response.data?.results
          .filter(
            (character: CharacterDetails) =>
              character.thumbnail &&
              !character.thumbnail.path.includes("image_not_available")
          )
          .slice(0, 8); // displaying 6 characters

        setRecommendCharacter(filteredCharacters);
      } catch (error) {
        setError("Error recommending characters");
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedHeroes();
  }, []);

  return (
    <div className="container mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-2">Recommended Heroes</h2>
      <span className="text-gray-500 mb-4 block">
        Heroes you might not know?
      </span>

      {loading && <Loader />}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {!loading && recommendCharacter.length === 0 && (
        <p className="text-center text-gray-500">No characters found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendCharacter.map((hero, id) => (
          <CharacterCard heros={hero} key={id} />
        ))}
      </div>
    </div>
  );
};
