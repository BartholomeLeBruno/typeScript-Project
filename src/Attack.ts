import {Pokemon} from "./Pokemon";

export class Attack {
    basePower: any;
    name: any;
    accuracy: any;
    constructor(name:any, basePower:any, accuracy:any) {
        this.name = name;
        this.basePower = basePower;
        this.accuracy = accuracy;
    }

}