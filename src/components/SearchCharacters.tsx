import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { getCharacterData } from "../services/marvelAPI";

type CharacterDetails = {
  thumbnail: any;
  id: number;
  name: string;
  description: string;
};

export const SearchCharacters = () => {
  const [characterName, setCharacterName] = useState<CharacterDetails[]>([]);
  const [searchCharater, setSearchCharater] = useState<string>("");

  const searchHeros = (name: string) => {
    getCharacterData(name)
      .then((response) => {
        setCharacterName(response.data.results);
        console.log("API Response:", response.data.results);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharater(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchHeros(searchCharater);
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-3xl mb-4">MARVEL CHARACTERS</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Search Characters"
          onChange={handleChange}
          value={searchCharater}
          className="p-2 rounded text-black"
        />
        <button
          type="submit"
          className="flex items-center px-4 py-2 bg-red-500 text-black rounded"
        >
          <FiSearch className="mr-2" />
          Search
        </button>
      </form>
      <div className="mt-4">
        {characterName.length === 0 ? (
          <p>No characters found. Try a different name!</p>
        ) : (
          characterName.map((hero) => (
            <div key={hero.id} className="p-4 border-b border-gray-700">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="mt-2 w-32 h-32 object-cover rounded"
              />
              <h1 className="text-xl font-bold">{hero.name}</h1>
              <p className="text-sm text-gray-400">
                {hero.description || "No description available."}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
