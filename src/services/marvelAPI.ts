import CryptoJS from "crypto-js";

const publicKey = "062417be89dd728de27225cc817a927e";
const privateKey = "9595241f6c2ec070965f040ee138dd90276b9ff0";
const ts = Date.now().toString();

export const generateHash = () => {
  return CryptoJS.MD5(ts + privateKey + publicKey).toString();
};

export const getCharacterData = async (
  name: string,
  offset = 0,
  limit = 20
) => {
  const hash = generateHash();
  const nameQuery = name ? `name=${name}&` : "";

  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters?${nameQuery}limit=${limit}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.json();
};

export const characterInfo = async (id: number) => {
  const hash = generateHash();
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.json();
};

export const getComicsForCharacters = async (characterID: string) => {
  const hash = generateHash();
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${characterID}/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.json();
};

export const getSeries = async (id: string) => {
  const hash = generateHash();
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${id}/series?seriesType=collection&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.json();
};

export const showComics = async () => {
  const hash = generateHash();
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return response.json();
};
