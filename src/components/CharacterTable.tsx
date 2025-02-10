import { useNavigate } from "react-router-dom";

import { CharacterDetails } from "../types/Characters";

type CharacterTable = {
  characters: CharacterDetails[];
};

export const CharacterTable = ({ characters }: CharacterTable) => {
  const navigate = useNavigate();
  return (
    <div className="overflown-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Thumbnail</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character) => (
            <tr
              key={character.id}
              className="border-b cursor-pointer hover:bg-gray-200"
              onClick={() => navigate(`/characters/${character.id}`)}
            >
              <td className="p-3">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
              </td>
              <td className="p-3 font-semibold">{character.name}</td>
              <td className="p-3">
                {character.description || "No description available."}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
