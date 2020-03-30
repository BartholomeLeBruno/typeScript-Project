import {begin, Pokemon} from "../Pokemon"
import {Attack} from "../Attack";
import {Battle} from "../Battle";

describe('Test ../Pokemon.ts', () => {
    let pokemon = new Pokemon("Pikachu",45,100, 15,10,10, 20);
    let pokemon2 = new Pokemon("ratata",30,100, 15,10,10,20);
    let monarchiste = new Pokemon("Malivert",100,100, 150,100,10, 20);
    let charge = new Attack("charge", 50,100);
    let quaranteNeufTrois = new Attack("quaranteNeufTrois", 300,100);
    let listAttack: Array<Attack> = [charge,quaranteNeufTrois];
    let listPokemon = begin(pokemon,pokemon2);

    let battle = new Battle(pokemon, pokemon2);
    battle.start();

    battle.start();
    test('should equals', () => {
        expect(pokemon.name).toBe("Pikachu");
    });
    test('should first pokemon attaque first', () => {
        let listPokemonOutput:Array<Pokemon> = [pokemon,pokemon2];
        expect(begin(pokemon,pokemon2)).toStrictEqual(listPokemonOutput);
    });
    test('should first pokemon loose 10hp', () => {
        pokemon.attaque(battle,pokemon2,charge);
        expect(pokemon2.hp).toBe(90);
    });
    test('should pokemon2 be game over alive', () => {
        monarchiste.attaque(battle,pokemon2,quaranteNeufTrois);
        expect(battle.status).toBe(false);
    });
    test('should monarchiste be still alive ', () => {
        battle.start();
        pokemon2.attaque(battle,monarchiste,charge);
        expect(battle.status).toBe(true);
    });
    test('should game be over ', () => {
        battle.start();
        while (battle.status)
        {
            battle.randomattack(listPokemon,listAttack);
        }
            //var intervalID = window.setInterval(battle.randomattack, 500, pokemon, pokemon2, listAttack);
        expect(battle.status).toBe(false);
    });
});