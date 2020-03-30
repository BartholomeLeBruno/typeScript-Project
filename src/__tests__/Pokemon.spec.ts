import {begin, Pokemon} from "../Pokemon"
import {Attack} from "../Attack";

describe('Test ../Pokemon.ts', () => {
    let pokemon = new Pokemon("Pikachu",45,100, 15,10,10);
    let pokemon2 = new Pokemon("ratata",30,100, 15,10,10);
    let charge = new Attack("charge", 50,90);
    test('should equals', () => {
        expect(pokemon.name).toBe("Pikachu");
    });
    test('should first pokemon attaque first', () => {
        expect(begin(pokemon,pokemon2)).toBe(pokemon);
    });
    test('should first pokemon loose 10hp', () => {
        pokemon.attaque(pokemon2,charge);
        expect(pokemon2.hp).toBe("90");
    });
});