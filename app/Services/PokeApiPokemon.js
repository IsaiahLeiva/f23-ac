

export class PokeApiPokemon {
    constructor(name, ability, move, species, weight) {
        this.name = name
        this.ability = ability
        this.move = move
        this.species = species
        this.weight = weight
    }
}

export class SandboxPokemon {
    constructor(name, ability, move, species, weight) {
        this.name = name
        this.ability = ability
        this.move = move
        this.species = species
        this.weight = weight
    }
}

export const PokeApiAbilities = new PokeApiAbilities()