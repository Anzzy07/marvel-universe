import { createContext, useState, useContext, useEffect } from "react";
import { Character, CharacterContextType } from "../types/CharacterContextType";

const CharacterContext = createContext<CharacterContextType | any>(null);

export const useCharacterContext = () => useContext(CharacterContext);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const storeFavs = localStorage.getItem("favorites");

    if (storeFavs) setFavorites(JSON.parse(storeFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorite = (character: Character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFromFavorites = (characterID: string) => {
    setFavorites((prev) =>
      prev.filter((character) => character.id !== characterID)
    );
  };

  const isFavorite = (characterID: string) => {
    return favorites.some((character) => character.id === characterID);
  };

  return (
    <CharacterContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorites, isFavorite }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
