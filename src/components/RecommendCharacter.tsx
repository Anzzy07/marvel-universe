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
        const response = await getCharacterData();

        //Filtering the characters that doesn't have any images
        const filteredCharacters = response.data?.results
          .filter(
            (character: CharacterDetails) =>
              character.thumbnail &&
              !character.thumbnail.path.includes("image_not_available")
          )
          .slice(0, 6); // displaying 6 characters

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
    <div>
      <h2>Recommended Heroes</h2>
      <span>Heroes you might not know?</span>
      {loading && <Loader />}
      {error && <p className="error-message">{error}</p>}
      {!loading && recommendCharacter.length === 0 && (
        <p>No characters found.</p>
      )}
      {recommendCharacter.map((hero, id) => (
        <CharacterCard heros={hero} key={id} />
      ))}
    </div>
  );
};
