import { useEffect, useState } from "react";
import { getCharacterData } from "../services/marvelAPI";
import { CharacterTable } from "../components/CharacterTable";
import { Pagination } from "../components/Pagination";
import { CharacterDetails } from "../types/Characters";
import { Loader } from "../components/Loading";

export const CharacterProfile = () => {
  const [characters, setCharacters] = useState<CharacterDetails[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const limit = 30;
  const offset = (page - 1) * limit;

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getCharacterData("", offset, limit);
        const filteredCharacters = response.data.results.filter(
          (character: CharacterDetails) =>
            character.name &&
            character.thumbnail?.path &&
            character.thumbnail?.extension &&
            character.description
        );

        setCharacters(filteredCharacters);
      } catch (error) {
        setError("Failed to load characters.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return (
    <div className="p-5">
      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}

      <CharacterTable characters={characters} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};
