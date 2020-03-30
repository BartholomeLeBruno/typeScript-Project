import {Pokemon, pokemonFunction} from "../Pokemon"
import begin = pokemonFunction.begin;

describe('Test ../Pokemon.ts', () => {
    test('should equals', () => {
        let pokemon = new Pokemon("Pikachu",45);
        expect(pokemon.name).toBe("Pikachu");
    });
    test('should first pokemon attaque first', () => {
        let pokemon = new Pokemon("Pikachu",45);
        let pokemon2 = new Pokemon("ratata",30);
        expect(begin(pokemon,pokemon2)).toBe(pokemon);
    });
});