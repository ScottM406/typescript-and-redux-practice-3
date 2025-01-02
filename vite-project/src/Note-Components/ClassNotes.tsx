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
  

  return (
    <h2>Refer to ClassNotes.tsx for notes on Typescript classes.</h2>
  )
}

export default ClassNotes;