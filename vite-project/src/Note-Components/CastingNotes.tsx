const Casting = () => {

  //TYPESCRIPT CASTING
    //When working with types, there are time when it is nessesary to override the type of a viable.
    //For instance, when incorrect types are provided by a library.
    //'Casting' is the process of overriding a type.

    //CASTING WITH 'as' - a straightforward way to cast a variable is using the 'as' keyword, which will directly change the type of the given variable:
    let theGivenVariable: unknown = "howdy";
    console.log((theGivenVariable as string).toUpperCase());

  return (
    <h2>Refer to CastingNotes.tsx for notes on Typescript Casting.</h2>
  )

}

export default Casting;