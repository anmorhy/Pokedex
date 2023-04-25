console.log('Sucesso!');

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return`
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://pokestats.gg/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fandreferreiradlw%2Fpokestats_media%2Fmain%2Fassets%2Fimages%2F001.png&w=1080&q=75"
                alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');


fetch(url)
    // .then(function (response) {
    //     return response.json()
    // })
    // .then(function (jsonBody){
    //     console.log(jsonBody)
    // })
    // .catch(function (error) {
    //     console.error(error)
    // })
    // .finally(function () {
    //     console.log('Requisição Concluida')
    // })

    // //ou  > o que vai pro segundo then e o retorno do primeiro
    // .then((response) => response.json()) // transforma o response em promisse do body convertido em json
    // .then((jsonBody) => jsonBody.results) // recebe o body convertido e da print
    // .then((pokemonList) => console.log(pokemonList)) // recebe o body convertido e da print
    // .catch((error) => console.error(error))

    .then((response) => response.json()) // transforma o response em promisse do body convertido em json
    .then((jsonBody) => jsonBody.results) // recebe o body convertido e da print
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            console.log(convertPokemonToLi(pokemon))
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
        }
    
    })
    .catch((error) => console.error(error))