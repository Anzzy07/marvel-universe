import { FormEvent, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { getCharacterData } from "../services/marvelAPI";
import { CharacterCard } from "../components/CharacterCard";
import { Loader } from "../components/Loading";

export type CharacterDetails = {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  description: string;
};

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
    <div className="">
      <form onSubmit={handleSearch} className="">
        <input
          type="text"
          placeholder="Marvel characters..."
          className=""
          value={searchTerm}
          ref={inputRef}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? (
            "Searching..."
          ) : (
            <>
              <FiSearch className="mr-2" /> Search
            </>
          )}
        </button>
      </form>

      {/* Displaying recent searches */}
      {recentSearch.length > 0 && (
        <div className="recent-searches">
          <h3>Recent Searches:</h3>
          <ul>
            {recentSearch.map((search, index) => (
              <li
                key={index}
                onClick={() => setSearchTerm(search)}
                className="recent-search-item"
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Displaying search results */}
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <Loader />
      ) : searchCharacter?.length === 0 ? (
        <div>
          {searchTerm ? "No character found." : "Search Your Super Heroes :)"}
        </div>
      ) : (
        <div className="movies-grid">
          {searchCharacter?.map((hero) => (
            <CharacterCard heros={hero} key={hero.id} />
          ))}
        </div>
      )}
    </div>
  );
};
