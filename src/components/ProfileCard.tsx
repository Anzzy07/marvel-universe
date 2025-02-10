import { CharacterProfileType } from "../types/CharacterProfile";

type ProfileCardProps = {
  character: CharacterProfileType | null;
};

export const ProfileCard = ({ character }: ProfileCardProps) => {
  if (!character) {
    return (
      <div className="text-center text-gray-500">Loading character data...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold mt-4">{character.name}</h2>
      <p className="text-gray-600 mt-2">
        {character.description || "No description available."}
      </p>
      <p className="mt-2">
        <strong>Comics Appeared In:</strong> {character.comics.available}
      </p>
      <p className="mt-2">
        <strong>Series:</strong> {character.series.available}
      </p>
    </div>
  );
};
