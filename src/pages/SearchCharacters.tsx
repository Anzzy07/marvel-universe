import { FormEvent, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
import { getCharacterData } from "../services/marvelAPI";
import { CharacterCard } from "../components/CharacterCard";

export type CharacterDetails = {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  description: string;
};

export const SearchCharacters = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchCharacter, setSearchCharacter] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { data, isLoading, error } = useQuery({
    queryKey: ["characterData", searchTerm],
    queryFn: () => getCharacterData(searchTerm!), // "!" because searchTerm will always be valid when enabled is true
    enabled: !!searchTerm, // API only works when user sets the value in input and searches.
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value); // Tracks user input field.
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current?.focus(); // If users clicks the search button useRef shows the focus on input field
    setSearchTerm(searchCharacter); // calling API
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <h2 className="text-3xl mb-4">MARVEL CHARACTERS</h2>
      <input
        type="search"
        placeholder="Search Characters"
        onChange={handleChange}
        value={searchCharacter}
        className="p-2 rounded text-black"
        ref={inputRef}
      />
      <button
        type="submit"
        className="flex items-center px-4 py-2 bg-red-500 text-black rounded"
        disabled={isLoading}
        onClick={handleSubmit}
      >
        <FiSearch className="mr-2" />
        Search
      </button>

      <div className="mt-4">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching characters: {(error as Error).message}</p>}
        {data?.data?.results.length === 0 ? (
          <p>No characters found</p>
        ) : (
          data?.data?.results.map((hero: CharacterDetails) => (
            <CharacterCard heros={hero} key={hero.id} />
          ))
        )}
      </div>
    </div>
  );
};
