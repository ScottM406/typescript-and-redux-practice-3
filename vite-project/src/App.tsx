function App() {

  // When creating a variable, there are two main ways TypeScript assigns a type:
  // 1.) Explicit
  // 2.) Implicit

  //Expicit is writing the tyoe out using the following format. Type assignment is easier to read and more intentional.
  const firstName: string = "Sam";

  //Implicit is the same as vanilla JS. Typescript will "guess" the type based on the assigned value. Example follows:
  const lastName = "Darnold";

  //Note: Having TypeScript "guess" the type of a value is called infer.

  //ERRORS IN TYPE ASSIGNMENT:

  //Typescript will throw an error if data types do not match:
  let team: string = "Vikings";
  team = 33; //error: Type 'number' is not assignable to type 'string'.

   let jerseryNumber = 14
  jerseryNumber = "fourteen"; //error: Type 'string' is not assignable to type 'number'.

  //UNABLE TO INFER - Typescript may not always properly infer what the tyoe of a viriable may be. In such cases, 
  //                  it will set the type to 'any' which disables type checking.

  let json = JSON.parse("2024");
  json = JSON.parse("true")
  console.log(typeof json); // running only line 27: number. running both 27 and 28: boolean

  //This sets a variable to type any:
  let var1: any = null;
  //It can be reassigned to any data type:
  var1 = false;

  //DATA TYPE - UNKOWN - best used when don't know the type of data being typed. To add a type later, youll need to cast it.
  //CASTING is when we use the 'as' keyword to say property or variable is of the casted type.
  let w: unknown = 1;
  w = "string"; // no error
  w = {
    runANonExistentMethod: () => {
      console.log("I think therefore I am");
    }
  } as { runANonExistentMethod: () => void} //void means no data type
  // How can we avoid the error for the code commented out below when we don't know the type?
  // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
  if(typeof w === 'object' && w !== null) {
    (w as { runANonExistentMethod: Function }).runANonExistentMethod();
  }
  // Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

  return (
    <>
    </>
  )
}

export default App
