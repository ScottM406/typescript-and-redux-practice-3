const ObjectTypeNotes = () => {

  //Typescript has a specific syntax for typing objects:
  const vikingsThisSeason: { coach: string, quarterback: string, wins: number, losses: number } = { //types need to be defined for each value
    coach: "Kevin O'Connell",
    quarterback: "Sam Darnold",
    wins: 14,
    losses: 2
  };

    //Typescript can also infer the types of properies based on their values
    const kirklandChickenSausageLinks = {
      mainIngredient: "chicken",
      calories: 150,
      gramsOfProtein: 15,
      isFullyCooked: true
    };

    kirklandChickenSausageLinks.calories = true; //error: Type 'boolean' is not assignable to type 'number'. Type was infered even though it wasnt explicitly given.

  //Optional Object Properies - optional properties are properties that don't have to be defined in the object definition.

    //example WITHOUT an optional property:
    const thisPlaylist: { mainGenre: string, length: number } = { //error: Property 'length' is missing in type '{ mainGenre: string; }' but required in type '{ mainGenre: string; length: number; }'.
      mainGenre: "chillstep"
    };
    thisPlaylist.length = 40;
    console.log(thisPlaylist); // even though error is thrown is IDE, still logs successfully in browser console

    //example WITH an optional property:
    const thisOtherPlaylist: { mainGenre: string, length?: number} = {
      mainGenre: "trance"
    }; //no error beacuse length propery is optional.
    thisOtherPlaylist.length = 100;
    console.log(thisOtherPlaylist); // logs successfully with no error thrown

  //Index Signitures - index signitures can be used for objects without a defined list of properties:

    const playerJerseyNumberMap: { [index: string]: number } = {};
    playerJerseyNumberMap.samDarnold = 14;
    playerJerseyNumberMap.justinJefferson = 18;
    playerJerseyNumberMap.camBynum = 24;
    playerJerseyNumberMap.jordanAddison = 3;
    playerJerseyNumberMap.harrisonSmith = "Twenty-Two"; //error: Type 'string' is not assignable to type 'number'.
    console.log(playerJerseyNumberMap); // logs all properties in console browser, even though IDE throws eroor on line 44

  return (
    <h2>Refer to ObjectTypeNotes.tsx for notes on Typescript object types.</h2>
  )
}

export default ObjectTypeNotes;