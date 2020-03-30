export class Pokemon{
    name: any;
    speed: any;
    constructor(name: any, speed:any) {
        this.name = name;
        this.speed = speed;
    }
    attaquefirst(pokemon: Pokemon) {
        return this.speed > pokemon.speed;
    }

}