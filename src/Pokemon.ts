import {Attack} from "./Attack";
import {Battle} from "./Battle";


export class Pokemon{
    name: any;
    speed: any;
    hp: any;
    level: any;
    offensiveStat: any;
    defensiveStat: any;
    criticalPercentil: any;
    constructor(name: any, speed:any, hp:any, level: any, offensiveStat: any, defensiveStat: any, criticalPercentil:any) {
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.level = level;
        this.offensiveStat = offensiveStat;
        this.defensiveStat = defensiveStat;
        this.criticalPercentil = criticalPercentil;
    }

    attaque(battle: Battle,pokemon: Pokemon, attack: Attack)
    {
        if(battle.status) {
            let accuracyPokemon = getRandomInt(101);
            if (attack.accuracy > accuracyPokemon) {
                pokemon.hp = pokemon.hp - damageCalculation(this, pokemon, attack);
                if(pokemon.hp <= 0)
                    battle.end();
            }
        }
    }



}
function damageCalculation(pokemonAttk: Pokemon, pokemonDef:Pokemon, attack: Attack) {
    return Math.floor(Math.floor(Math.floor(2 * pokemonAttk.level / 5 + 2) * pokemonAttk.offensiveStat * attack.basePower / pokemonDef.defensiveStat) / 50) + 2;
}
function getRandomInt(max:any)
{
    return Math.floor(Math.random() * Math.floor(max));

}
export function begin(pokemon:Pokemon, pokemon1: Pokemon) : Array<Pokemon> {
    if(pokemon.speed > pokemon1.speed) {
        return [pokemon, pokemon1];
    }
    else {
        return [pokemon1, pokemon];
    }
}