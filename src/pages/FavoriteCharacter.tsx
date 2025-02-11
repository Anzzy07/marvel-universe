import { useCharacterContext } from "../context/SavedCharacters";
import { CharacterCard } from "../components/CharacterCard";
import { CharacterDetails } from "../types/Characters";

export const FavoriteCharacter = () => {
  const { favorites } = useCharacterContext();

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Your Favorite Characters
      </h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg">
          No favorites yet! Go explore and add some.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((hero: CharacterDetails) => (
            <CharacterCard key={hero.id} heros={hero} />
          ))}
        </div>
      )}
    </div>
  );
};
