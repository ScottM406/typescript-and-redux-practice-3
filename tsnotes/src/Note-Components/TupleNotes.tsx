const TupleNotes = () => {

  //A tuple is a typed array with a pre-defined length and types for each index.
  //they are useful beacause they allow each element in the array to be a known type of value.
  //to define a tuple, you must specify the type of each element in the array:
  
    //define tuple:
    let myVeryFirstTuple: [string,number,boolean,string,number];
    //initialize tuple:
    myVeryFirstTuple = ["huh?", 13, true, "okay", 3000];

    //initializing incorrectly throws an error:
    let mySecondTupleThatIsGoingToBeTrash: [boolean,boolean,number,string];
    mySecondTupleThatIsGoingToBeTrash = ["uh","oh", false, -10]; //error Type '(type)' is not assignable to type '(type)' x4.

  //Readonly Tuple - IT IS A GOOD PRACTICE TO MAKE YOUR TUPLE 'readonly', NOTE - GOOD PRACTICE FOR TUPLES, NOT NESSESARILY FOR ARRAYS!

    //non-readonly tuple (LAME PRACTICE):
    let nonReadonlyTuple: [string, string, number];
    nonReadonlyTuple = ["Andre 3000","BigBoi", 30337]
    nonReadonlyTuple.push('Outkast')
    console.log(nonReadonlyTuple) // 'Outkast successfully added to array at index 3.

    //readonly tuple - GOOD PRACTICE:
    let readonlyTuple: readonly [string, string, string, string, string, string]
    readonlyTuple = ["cooler", "than", "a", "polar", "bear's", "toenails"]
    readonlyTuple.push("Oh hell, there he go again talkin that sh!@") //error: Property 'push' does not exist on type 'readonly [string, string, string, string, string, string]'.

  //Named Tuples - Allows the coder to provide context for their values at each index:

    const greenBayAtMinnesotaScore: [greenBayScore: number, minnesotaScore: number] = [25, 27]
    console.log("Packers:",greenBayAtMinnesotaScore[0],"Vikings:",greenBayAtMinnesotaScore[1])
    console.log("Sam Darnold is the man.")

  //Deconstructing Tuples - like normal arrays, tuples can be descructured
    const graph: [number,number] = [20, 30];
    const [x,y] = graph;
    console.log(x,y) // 20, 30

  return (
    <div>
      <h2>Refer to TupleNotes.tsx in VScode for notes on Typescript tuples.</h2>
    </div>
  )
}

export default TupleNotes;