import {Attack} from "./Attack";
import {Pokemon} from "./Pokemon";

export class PokemonTools {

}

function damageCalculation(pokemonAttk: Pokemon, pokemonDef:Pokemon, attack: Attack) {
    return Math.floor(Math.floor(Math.floor(2 * pokemonAttk.level / 5 + 2) * pokemonAttk.offensiveStat * attack.basePower / pokemonDef.defensiveStat) / 50) + 2;
}
function getRandomInt(max:any)
{
    return Math.floor(Math.random() * Math.floor(max));

}