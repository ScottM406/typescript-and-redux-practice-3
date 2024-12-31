const ArrayNotes = () => {

//Typescript has a specific syntax for typing arrays. It is as follows:
const names: string[] = [];
names.push("Scott") //no error
names.push(true) // error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

//the keyword 'readonly' can be used to prevent arrays from being changed. Example below:
const names2: readonly string[] = ["Scott"]
names2.push("Sarah") // error: Property 'push' does not exist on type 'readonly string[]'.
names2.shift("Billy") // error: Property 'shift' does not exist on type 'readonly string[]'.

//ARRAY TYPE INFERENCE - Typescript can infer the type of an array if it has values.

const numbers = [1,2,3,4,5] //Typescript infers type number[]
numbers.push(6) //no problemo
numbers.push("seven") //error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0] //no error
let bustedHead: string = numbers[0] // error: Type 'number' is not assignable to type 'string'.

return (
  <div>
    <h1>Refer to ArrayNotes.tsx in VScdoe for notes on Typescript arrays.</h1>
  </div>
)

}

export default ArrayNotes;