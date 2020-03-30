export class Pokemon{
    name: any;
    speed: any;
    constructor(name: any, speed:any) {
        this.name = name;
        this.speed = speed;
    }

}
export module pokemonFunction {
    export function begin(pokemon:Pokemon, pokemon1: Pokemon) {
        if(pokemon.speed > pokemon1.speed)
            return pokemon;
        else
            return  pokemon1;
    }
}