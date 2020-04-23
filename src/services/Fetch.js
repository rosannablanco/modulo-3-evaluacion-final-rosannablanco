//const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
const FetchDataApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((result) => {
        return {
          id: result.id,
          name: result.name,
          species: result.species,
          image: result.image,
          origin: result.origin.name,
          episode: result.episode,
          status: result.status,
        };
      });
    });
};

export default FetchDataApi;
