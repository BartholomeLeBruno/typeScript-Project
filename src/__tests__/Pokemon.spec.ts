import {Pokemon} from "../Pokemon"

describe('Test ../Pokemon.ts', () => {
    test('should equals', () => {
        let pokemon = new Pokemon("Pikachu",45);
        expect(pokemon.name).toBe("Pikachu");
    })
    test('should attaque first', () => {
        let pokemon = new Pokemon("Pikachu",45);
        let pokemon2 = new Pokemon("ratata",30);

        expect(pokemon.attaquefirst(pokemon2)).toBe(true);
    })
});