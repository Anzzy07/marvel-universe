import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  characterInfo,
  getComicsForCharacters,
  getSeries,
} from "../services/marvelAPI";
import { CharacterDetails as CharacterType } from "../types/Characters";
import { useCharacterContext } from "../context/SavedCharacters";
import { Loader } from "../components/Loading";

export const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [comics, setComics] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { addToFavorite, removeFromFavorites, isFavorite } =
    useCharacterContext();

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await characterInfo(Number(id));
        if (response.data.results.length > 0) {
          setCharacter(response.data.results[0]);
        } else {
          setError("Character not found.");
        }
      } catch (error) {
        setError("Failed to load character details.");
        console.error(error);
      }
    };

    const fetchComicsAndSeries = async () => {
      try {
        const comicsResponse = await getComicsForCharacters(id!);
        const seriesResponse = await getSeries(id!);
        setComics(comicsResponse.data.results);
        setSeries(seriesResponse.data.results);
      } catch (error) {
        console.error("Failed to load comics or series.", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
    fetchComicsAndSeries();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!character)
    return <p className="text-gray-500">No character data available.</p>;

  const favorite = isFavorite(character.id);

  const likeToFavorite = () => {
    if (favorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorite(character);
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <Link to="/character-details">
        <span>← Go Back</span>
      </Link>
      <div className="flex items-center space-x-5 relative">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="h-40 w-40 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold">{character.name}</h2>
          <p className="mt-2 text-gray-600">
            {character.description || "No description available."}
          </p>
        </div>

        <button
          className={`absolute top-4 right-4 text-white text-xl p-2 rounded-full w-10 h-10 flex items-center justify-center transition duration-200 
              ${favorite ? "bg-black/50" : "bg-black/50 hover:bg-red-500"}`}
          onClick={likeToFavorite}
        >
          {favorite ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Comics Appeared In:</h3>
        <ul className="list-disc pl-5">
          {comics.length > 0 ? (
            comics.map((comic, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center space-x-3"
              >
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                  className="h-12 w-12 rounded-md"
                />
                <span>{comic.title}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No comics available.</p>
          )}
        </ul>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold">Series:</h3>
        <ul className="list-disc pl-5">
          {series.length > 0 ? (
            series.map((s, index) => (
              <li
                key={index}
                className="text-gray-700 flex items-center space-x-3"
              >
                <img
                  src={`${s.thumbnail.path}.${s.thumbnail.extension}`}
                  alt={s.title}
                  className="h-12 w-12 rounded-md"
                />
                <span>{s.title}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No series available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};
