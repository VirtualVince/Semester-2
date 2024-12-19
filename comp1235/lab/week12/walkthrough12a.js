"use strict";
//walkthrough12a.ts
const anExampleVariable = "This is an example";
console.log(anExampleVariable);
class Mammal {
    constructor(p_age) {
        console.log("Constructing the Mammal part of the object");
        this.age = p_age;
    }
    do_walk(age, jaunt) {
        console.log(jaunt); //if no value was given for the parameter jaunt, it is undefined by default
        if (jaunt) {
            return "walks like a duck";
        }
        else {
            return "walks like a businessman";
        }
    }
}
//I want the Human class to inherit from Mammal and implement Walker
class Human extends Mammal {
    constructor(p_age, p_name, p_haircolor) {
        //call the parent class constructor
        super(p_age);
        console.log("constructing the human part of the object");
        //access modifiers (private, protected and public)
        this.name = p_name;
        this.haircolor = p_haircolor;
        this.age = p_age;
    }
}
const h1 = new Human(5, "bobby", "blonde");
console.log(h1);
//console.log(h1.do_walk(5, true));
console.log(h1.do_walk(5));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjtBQUNuQixNQUFNLGlCQUFpQixHQUFVLG9CQUFvQixDQUFBO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQVU5QixNQUFNLE1BQU07SUFHUixZQUFZLEtBQWE7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFBO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWU7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDJFQUEyRTtRQUMvRixJQUFHLEtBQUssRUFBQyxDQUFDO1lBQ04sT0FBTyxtQkFBbUIsQ0FBQTtRQUM5QixDQUFDO2FBQU0sQ0FBQztZQUNKLE9BQU8sMEJBQTBCLENBQUE7UUFDckMsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQUVELG9FQUFvRTtBQUNwRSxNQUFNLEtBQU0sU0FBUSxNQUFNO0lBS3RCLFlBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxXQUFtQjtRQUMxRCxtQ0FBbUM7UUFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pELGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0NBRUo7QUFFRCxNQUFNLEVBQUUsR0FBVSxJQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDZixtQ0FBbUM7QUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==