export type CharacterDetails = {
  thumbnail: { path: string; extension: string };
  id: number;
  name: string;
  description: string;
};

export type ComicsDetails = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
