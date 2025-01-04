const ClassNotes = () => {

  //Typescript adds types and visibility modifiers to JavaScript classes.

  //Members: Types

    //The members of a class (properties and methods) are typed using annotations, similar to variables:

      //W3schools uses this example. It throws tyoescript errors, but runs fine.
      class Clown {
        name: string; //TS error - Property 'name' has no initializer and is not definitely assigned in the constructor.
        experience: number; //TS error - Property 'experience' has no initializer and is not definitely assigned in the constructor.
        }

        const clown1 = new Clown();
        clown1.name = "bubbles";
        clown1.experience = 2.5;
        console.log(clown1); // logs Clown {name: 'bubbles', experience: 2.5}

      //This way throws no errors:
      class Dog {
        name: string;
        age: number;

        constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
        }
      }

      const dog1 = new Dog("Spot", 3);
      console.log(dog1) // logs Dog {name: 'Spot', age: 3}
  
  //Members: Visibility
      
    //Class members can also be given special modifiers which affect visibility:
    //There are three main visibility modifiers in Typescript:
      //'public' - (default) - allows access to the class memver from anywhere.
      //'private' - only allows access to the class member from within the class.
      //'protected' - allows access to the class member from itself and any classes that inherit it.

    class Kitty {
      private name: string;
      private jumpHeightInFeet: number;

      public constructor(name: string, jumpHeightInFeet: number) {
        this.name = name
        this.jumpHeightInFeet = jumpHeightInFeet;
      }

      public getName(): string {
        return this.name
      }

      public getJumpHeight(): number {
        return this.jumpHeightInFeet;
      }
    }

    const crumpet = new Kitty("Crumpet", 6)
    console.log(crumpet.getName(), " jumps ", crumpet.getJumpHeight(), " feet!");
    // ^ mess around with these visibility keywords to observe TS errors.

    //Parameter Properties
     
      //TS provides a convenient way to define class members in the constructor, by adding a visibility modifier to the paramenter

      class Hamster { 

        public constructor(private name: string) {
        }

        public praiseHamster(): string {
          return this.name + " is a very good hamster.";
        }
      };

      const gerald = new Hamster("Gerald");
      console.log(gerald.praiseHamster());

    //Readonly
      //Similar to arrays, the 'readonly' keyword can prevent class members from being changed:

      class Person {
        private readonly name: string
        private readonly birthday: any
        private age: number


        public constructor(name: string, birthday: any, age: number) { //name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
          this.name = name;
          this.birthday = birthday
          this.age = age
        }

        public declarePersonsAge(): string {
          return `${this.name} was born on ${this.birthday}, and is ${this.age} years old!`
        }
      }

      const person1 = new Person("Betty", "August 01, 1981", 43);
      console.log(person1.declarePersonsAge());

    //Inheritance: Implements
      //Interfaces can be used to define the type a class must follow through the 'implements' keyword

      interface Shape {
        getArea: () => number;
      }

      class Rectangle implements Shape {

        public constructor(protected readonly width: number, protected readonly height: number) {}

        public getArea(): number {
          return this.width * this.height;
        }
      }
      //NOTE - A class can implement multiple interfaces by listing each one after 'implements,
      //       seperated by a comma like so: class Rectangle implements Shape, Color, Attitude {

    //Inheritance: Extends
      //Classes can extend each other through the 'extends' keyword. A class can only entend one other class.

      interface Shape2 {
        getArea: () => number;
      }

      class Rectangle2 implements Shape2 {
        //using protected for these members allows access from classes that extend from this class, such as Square2
        public constructor(protected readonly width: number, protected readonly height: number0) {}

        public getArea(): number {
          return this.width * this.height;
        }

        public describleRectangle2(): string {
          return `This rectangle has a width of ${this.width} feet, a height of ${this.height}, and an area of ${this.getArea()} feet.`
        }
      }

      class Square2 extends Rectangle2 {
        public constructor(width: number) {
          super(width, width)
          //The constructor takes one parameter, width, and passes it twice to the Rectangle constructor using super(width, width).
          //This ensures that both the width and height of the square are the same.
        }
      
    //Override
      //When a class extends another class, it can replace the members of the parent class with the same name.
      //Newer versions (including the one I'm using) allow explicitly marking this with the 'override' keyword.

        public override describleRectangle2(): string { // This method overrides previous 'describeRectangle2' mehtod.
          return `This square has a width of ${this.width} feet, and an area of ${this.getArea()} feet.`
        }
      }

      const bigOlRectangle = new Rectangle2(30000, 60000);
      console.log(bigOlRectangle.describleRectangle2()); // logs return of original 'describeRectangle2' method
      const smallSquare = new Square2(2);
      console.log(smallSquare.describleRectangle2()); //logs return of 'describeRectangle2' mehtod that overwrode the original.
      
    //Abstract Classes
      //Classes can be written in a way that allows them to be used as a base class for other classes without having
      //to implment all the members. This is done by using the 'abtract' keyword. Members that are left unimplemented
      //also use the 'abstract' keyword.

      abstract class Polygon {
        public abstract getArea(): number;
        
        public describePolygonArea(): string {
          return `The area of this polygon is ${this.getArea()}`
        }
      }

      class Rectangle3 extends Polygon {
        public constructor(protected readonly width: number, protected readonly height: number) {
          super();
        }

        public getArea(): number {
          return this.width * this.height;
        }
      }
      //NOTE - Abstract classes cannot be directly instantiated (objects cannot be created directly from them), 
      //as they do not have all their members implemented.

      const justAChillRectangle = new Rectangle3(10, 30);
      console.log(justAChillRectangle.describePolygonArea());

  return (
    <h2>Refer to ClassNotes.tsx for notes on Typescript classes.</h2>
  )
}

export default ClassNotes;