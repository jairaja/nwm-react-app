const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

const FetchData = async() => {
    const resp = await fetch(url);
    const resultJson = await resp.json(); 
    return resultJson;
}

export default FetchData;