//walkthrough12a.ts
const anExampleVariable:string = "This is an example"
console.log(anExampleVariable)

//We can also make a interface which provides rules for the properties
//and methods of a later class
interface Walker{
    readonly age:number;
    //This method has 1 required parameters, and one optional parameter
    do_walk(age:number, jaunt?:boolean): string
}

class Mammal implements Walker{
    readonly age: number;

    constructor(p_age: number){
        console.log("Constructing the Mammal part of the object");
        this.age = p_age
    }

    do_walk(age: number, jaunt?: boolean): string {
        console.log(jaunt); //if no value was given for the parameter jaunt, it is undefined by default
        if(jaunt){
            return "walks like a duck"
        } else {
            return "walks like a businessman"
        }
    }
}

//I want the Human class to inherit from Mammal and implement Walker
class Human extends Mammal implements Walker {
    readonly age: number;
    protected name: string;
    public haircolor: string;

    constructor(p_age: number, p_name: string, p_haircolor: string){
        //call the parent class constructor
        super(p_age);

        console.log("constructing the human part of the object");
        //access modifiers (private, protected and public)
        this.name = p_name;
        this.haircolor = p_haircolor;
        this.age = p_age
    }

}

const h1: Human = new Human(5,"bobby","blonde");
console.log(h1)
//console.log(h1.do_walk(5, true));
console.log(h1.do_walk(5));