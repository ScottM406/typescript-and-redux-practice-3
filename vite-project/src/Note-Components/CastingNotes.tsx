const Casting = () => {

  //TYPESCRIPT CASTING
    //When working with types, there are time when it is nessesary to override the type of a viable.
    //For instance, when incorrect types are provided by a library.
    //'Casting' is the process of overriding a type.

    //CASTING WITH 'as' - a straightforward way to cast a variable is using the 'as' keyword, which will directly change the type of the given variable:
    let theGivenVariable: unknown = "howdy";
    console.log((theGivenVariable as string).toUpperCase());

    //Note - Casting doesn't actually change the type of the data within the variable, for example the following code will 
    //not work as expected since the variable x is still holds a number.
    let x: unknown = 4;
    console.log((x as string).length); // prints undefined since numbers don't have a length

    //Note - TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, 
    //for example the following will throw a type error since TypeScript knows casting a string to a number
    //doesn't makes sense without converting the data:
    console.log((4 as string).length) //error - Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

    //CASTING WITH '<>' - works the same as with 'as':
    
    let y: unknown = "yo";
    // console.log((<string>y).length); <------ THIS WOULD WORK IN A .TS FILE - DOESN'T HERE IN A .TSX

  return (
    <h2>Refer to CastingNotes.tsx for notes on Typescript Casting.</h2>
  )

}

export default Casting;