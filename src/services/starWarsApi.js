const getPlanets = async () => {
  const RESPONSE = await fetch('https://swapi.dev/api/planets');
  const DATA = RESPONSE.json();
  return DATA;
};

export default getPlanets;
