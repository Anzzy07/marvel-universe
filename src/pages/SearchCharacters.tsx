import { FormEvent, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { getCharacterData } from "../services/marvelAPI";
import { CharacterCard } from "../components/CharacterCard";
import { Loader } from "../components/Loading";
import { RecommendCharacter } from "../components/RecommendCharacter";
import type { CharacterDetails } from "../types/Characters";

export const SearchCharacters = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchCharacter, setSearchCharacter] = useState<CharacterDetails[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [recentSearch, setRecentSearch] = useState<string[]>([]);

  useEffect(() => {
    const storeCharacterSearches = localStorage.getItem("recentSearch");
    if (storeCharacterSearches) {
      setRecentSearch(JSON.parse(storeCharacterSearches));
    }
  }, []);

  const updateRecentSearch = (searched: string) => {
    if (!searched.trim()) return;

    const updatedSearch = [
      searched,
      ...recentSearch.filter((search) => search !== searched),
    ].slice(0, 5);

    setRecentSearch(updatedSearch);
    localStorage.setItem("recentSearch", JSON.stringify(updatedSearch));
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inputRef.current?.focus(); // If users clicks the search button useRef shows the focus on input field

    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await getCharacterData(searchTerm);
      setSearchCharacter(searchResults.data?.results);
      updateRecentSearch(searchTerm);
      console.log(searchResults);
    } catch (error) {
      setError("Error searching characters");
      console.error("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Marvel characters..."
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" // Tailwind input styling
          value={searchTerm}
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2" // Tailwind button styling
          disabled={loading}
        >
          {loading ? (
            "Searching..."
          ) : (
            <>
              <FiSearch className="mr-2" /> Search
            </>
          )}
        </button>
      </form>
      {/* Recent Searches */}
      {recentSearch.length > 0 && (
        <div className="mt-4">
          {" "}
          <h3 className="text-lg font-bold mb-2">Recent Searches:</h3>{" "}
          <ul className="border border-gray-300 rounded-md">
            {recentSearch.map((search, index) => (
              <li
                key={index}
                onClick={() => setSearchTerm(search)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer" // Tailwind list item styling
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Search Results */}
      {error && <div className="text-red-500 mt-2">{error}</div>}{" "}
      {loading ? (
        <Loader />
      ) : searchCharacter?.length === 0 ? (
        <div className="mt-4 text-center">
          {searchTerm ? "No character found." : "Search Your Super Heroes :)"}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {searchCharacter?.map((heros) => (
            <CharacterCard heros={heros} key={heros.id} />
          ))}
        </div>
      )}
      <RecommendCharacter />
    </div>
  );
};
