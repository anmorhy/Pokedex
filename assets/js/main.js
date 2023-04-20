console.log('Sucesso!');

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset${offset}&limit=${limit}`

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

    //ou  > o que vai pro segundo then e o retorno do primeiro
    .then((response) => response.json()) // transforma o response em promisse do body convertido em json
    .then((jsonBody) => console.log(jsonBody)) // recebe o body convertido e da print
    .catch((error) => console.error(error))