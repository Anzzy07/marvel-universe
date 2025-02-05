export type CharacterDetails = {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  description: string;
  comics: {
    items: {
      name: string;
    };
  };
};
