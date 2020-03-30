import {Pokemon, begin} from './Pokemon';
import {Attack} from "./Attack";
import {Battle} from "./Battle";

let pokemon = new Pokemon("Pikachu",45,100, 15,10,10, 20);
let pokemon2 = new Pokemon("ratata",30,100, 15,10,10,20);
let battle = new Battle(pokemon, pokemon2);
let charge = new Attack("charge", 50,100);
let quaranteNeufTrois = new Attack("quaranteNeufTrois", 300,100);
let listAttack: Array<Attack> = [charge,quaranteNeufTrois];
let listPokemon = begin(pokemon,pokemon2);
battle.start();
setTimeout(function(){
    battle.randomattack(listPokemon, listAttack)
}, 500);
    //var intervalID = window.setInterval(battle.randomattack, 500, pokemon, pokemon2, listAttack);


