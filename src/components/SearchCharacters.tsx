import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";

import { getCharacterData } from "../services/marvelAPI";
import { CharacterCard } from "./CharacterCard";

export type CharacterDetails = {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  description: string;
};

export const SearchCharacters = () => {
  const [searchCharacter, setSearchCharacter] = useState<string>("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["characterData", searchCharacter],
    queryFn: () => getCharacterData(searchCharacter),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchCharacter.trim()) {
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-3xl mb-4">MARVEL CHARACTERS</h2>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="search"
          placeholder="Search Characters"
          onChange={handleChange}
          value={searchCharacter}
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
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching characters. Please try again.</p>}
        {data?.data?.results.length === 0 ? (
          <p>No characters found</p>
        ) : (
          data?.data?.results.map((heros: CharacterDetails) => (
            <CharacterCard heros={heros} key={heros.id} />
          ))
        )}
      </div>
    </div>
  );
};
