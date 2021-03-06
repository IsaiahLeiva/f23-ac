

export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 5000
})

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/IsaiahLeiva/pokemon',
    timeout: 5000
})