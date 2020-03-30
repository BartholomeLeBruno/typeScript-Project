import {Pokemon} from "../Pokemon"

describe('Test ../Pokemon.ts', () => {
    test('should equals', () => {
        let pokemon = new Pokemon("Pikachu",45);
        expect(pokemon.name).toBe("Pikachu");
    })
});