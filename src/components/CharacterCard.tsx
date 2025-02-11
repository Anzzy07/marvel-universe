import { Link } from "react-router-dom";
import { CharacterDetails } from "../types/Characters";
import { useCharacterContext } from "../context/SavedCharacters";

type CharacterCardProps = {
  heros: CharacterDetails;
};

export const CharacterCard = ({ heros }: CharacterCardProps) => {
  const { addToFavorite, removeFromFavorites, isFavorite } =
    useCharacterContext();

  const favorite = isFavorite(heros.id);

  const likeToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (favorite) removeFromFavorites(heros.id);
    else addToFavorite(heros);
  };

  return (
    <Link to={`/characters/${heros.id}`} className="block">
      <div
        key={heros.id}
        className="relative rounded-lg overflow-hidden bg-gray-800 transition transform duration-200 hover:translate-y-[-5px] flex flex-col w-full max-h-[400px]"
      >
        <div className="relative w-full">
          <img
            src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`}
            alt={heros.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 transition duration-200 hover:opacity-100 flex flex-col justify-end p-4">
            <button
              className={`absolute top-4 right-4 text-white text-xl p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-200 
              ${favorite ? "bg-black/50" : "bg-black/50 hover:bg-red-500"}`}
              onClick={likeToFavorite}
            >
              {favorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col gap-2">
          <h3 className="text-xl font-bold truncate">{heros.name}</h3>
        </div>
      </div>
    </Link>
  );
};
