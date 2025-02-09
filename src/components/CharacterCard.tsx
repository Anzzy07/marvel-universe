import { CharacterDetails } from "../types/Characters";

type CharacterCardDetails = {
  heros: CharacterDetails;
};

export const CharacterCard = ({ heros }: CharacterCardDetails) => {
  return (
    <div
      key={heros.id}
      className="relative rounded-lg overflow-hidden bg-gray-800 transition transform duration-200 hover:translate-y-[-5px] flex flex-col w-full max-h-[400px]" // Added max-h
    >
      <div className="relative w-full">
        <img
          src={`${heros.thumbnail.path}.${heros.thumbnail.extension}`}
          alt={heros.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 transition duration-200 hover:opacity-100 flex flex-col justify-end p-4">
          <button className="absolute top-4 right-4 text-white text-xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition duration-200 hover:bg-black/80">
            ♥
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-bold truncate">{heros.name}</h3>
        <p className="text-sm text-gray-400 line-clamp-3">
          {heros.description || "No description available."}
        </p>
      </div>
    </div>
  );
};
