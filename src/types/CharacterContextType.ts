export type Character = {
  id: string;
  name: string;
  thumbnail: string;
};

export type CharacterContextType = {
  favorites: Character[];
  addToFavorite: (character: Character) => void;
  removeFromFavorites: (characterID: string) => void;
  isFavorite: (characterID: string) => boolean;
};
