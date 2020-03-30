import {Pokemon} from './Pokemon';
import {Attack} from "./Attack";

let pokemon = new Pokemon("Pikachu",45,100, 15,10,10);
let pokemon2 = new Pokemon("ratata",30,100, 15,10,10);
let charge = new Attack("charge", 50,90);
pokemon.attaque(pokemon2,charge);

console.log(pokemon2.hp);

