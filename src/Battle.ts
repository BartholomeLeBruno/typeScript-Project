import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";

export class Battle {
    status: any;
    pokemon1: Pokemon;
    pokemon2: Pokemon;
    winner: any;
    constructor(pokemon1: Pokemon, pokemon2: Pokemon)
    {
        this.status = false;
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
    }
    start()
    {
        if(this.pokemon1.hp >= 0 || this.pokemon2.hp >= 0)
        {
            this.status = true;
        }
    }
    end()
    {
        this.status = false;
    }
    randomattack(tabPokemon:Array<Pokemon>, attackTab: Array<Attack>)
    {
        let attack = getRandomInt(attackTab.length);
        console.log(this.status);
        if(this.status) {
            let accuracyPokemon = getRandomInt(101);
            let pokemon2:any = tabPokemon.pop();
            let pokemon1:any = tabPokemon.pop();
            this.whoIsAttacking(attackTab, attack, accuracyPokemon, pokemon2, pokemon1);
            tabPokemon.push(pokemon1);
            tabPokemon.push(pokemon2);
        }
        else{
            console.log("Pokemon battle over");
            clearInterval();
        }
    }

    private whoIsAttacking(attackTab: Array<Attack>, attack: number, accuracyPokemon: number, pokemon2: Pokemon, pokemon1: Pokemon) {
        if (attackTab[attack].accuracy >= accuracyPokemon) {
            pokemon2.hp = pokemon2.hp - damageCalculation(pokemon1, pokemon2, attackTab[attack]);
            console.log("Pokemon " + pokemon1.name + " hit " + pokemon2.name + " with attack " + attackTab[attack].name);
            if (pokemon2.hp <= 0 || pokemon1.hp <= 0) {
                this.end();
                console.log("Pokemon " + pokemon2.name + " is dead now");
                this.winner = pokemon1;
            }
        } else {
            console.log("Pokemon " + pokemon2.name + "failed his attack");
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