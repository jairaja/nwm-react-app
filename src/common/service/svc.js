const url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

function FetchData(){
    var result;
    fetch(url).then(response => {result = response.json()});
    return result;
}

export default FetchData;