import { CharacterDetails } from "../types/Characters";

type CharacterCardDetails = {
  heros: CharacterDetails;
};

export const CharacterCard = ({ heros }: CharacterCardDetails) => {
  return (
    <div key={heros.id} className="p-4 border-b border-gray-700">
      <img
        src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`}
        alt={heros.name}
        className="mt-2 w-32 h-32 object-cover rounded"
      />
      <h1 className="text-xl font-bold">{heros.name}</h1>
      <p className="text-sm text-gray-400">
        {heros.description || "No description available."}
      </p>
    </div>
  );
};
