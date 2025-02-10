import { ComicsDetails } from "../types/Characters";

type ComicCardDetails = {
  comic: ComicsDetails;
};

export const ComicCards = ({ comic }: ComicCardDetails) => {
  return (
    <div
      key={comic.id}
      className="relative rounded-lg overflow-hidden bg-gray-800 transition transform duration-200 hover:translate-y-[-5px] flex flex-col w-full max-h-[400px]" // Added max-h
    >
      <div className="relative w-full">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 transition duration-200 hover:opacity-100 flex flex-col justify-end p-4"></div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-xl font-bold truncate">{comic.title}</h3>
      </div>
    </div>
  );
};
