const Functions = () => {

  //Typescript has specific synthax for typing function parameters and return values.

    //RETURN TYPE

      //The type of the value returned by the function can be exlicitly defined:
      const getTime = (): number => {
        return new Date().getTime(); //no error - expecting number, returns number
      };

      const getTime2 = (): number => {
        return "hello" //error - Type 'string' is not assignable to type 'number'.
      };
      
      //Note - If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

    //VOID RETURN TYPE
      //The type 'void' can be used to indicate a function doesn't return any value:
      const printElloMate = (): void => {
        console.log("'ello Mate!")
      };
      printElloMate();
    
    //PARAMETERS - function parameters are typed with a syntax similar to variable declarations:
     const toThePowerOf = (a: number, b: number) => {
      return a**b;
     };

    //Optional Paramters - by default, TS assumes that all parameters are required, but they can be marked as optional with ?:

      //WRONG
      const addNums = (a: number, b: number, c?: number) => {
        return a + b + c // error - 'c' is possibly 'undefined'.
      };

      //RIGHT
      const multiplyNums =(a: number, b: number, c?: number) => {
        return a * b * (c || 1)
      };

    //DEFAULT PARAMETERS - for parameters with default values, the default value goes after the type annotation:
    const addIsGreat = (subject: string, judgement: string = " is great!") => {
      return subject + judgement;
    }; 
    console.log(addIsGreat("This cheeseburger")) // logs "This cheeseburger is great!" while only being given the subject parameter.

    //NAMED PARAMETERS - typing named parameters follows the same pattern as typing normal parameters:
    const subtractBothByTwo = ({ firstNum, secondNum }: { firstNum: number, secondNum: number} ) => {
      return [firstNum - 2, secondNum - 2]
    };

    //REST PARAMETERS - rest parameters can be typed like normal parameters, but the type must be an array as rest...
    //...parameters are always arrays.
    const addSeries = (a: number, b: number, ...rest: number[]) => {
      return a + b + rest.reduce((p,c) => (p + c), 0);
    };
    console.log(addSeries(1,2,3,4,5));

    //TYPE ALIAS - function types can be specified seperately from functions with type aliases.
    //             these type aliases are written similarly to arrow functions.

    type Negate = (value: number) => number;

    const negateFunction: Negate = (value) => value * -1;

    console.log(negateFunction(100));

      
  return (
    <h2>Refer to Functions.tsx for notes on Typescript functions.</h2>
  )
}

export default Functions;