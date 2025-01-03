const GenericsNotes = () => {

  //GENERICS - allow creating 'type variables' which can be used to create classes, funtions, and type aliases
  //           that don't need to explicitly define the types that they use:

    //Functions:
     //Generics with functions help make more generalized methods which more accurately represent the types used and returned.
      const createPair = <S, T>(variable1: S, variable2: T): [S, T] => { // S & T are PLACEHOLDER TYPES!
        return [variable1, variable2];
      }

      console.log(createPair<string, number>("I feel", 97));
      //NOTE - TypeScript can also infer the type of the generic parameter from the function parameters.

    //Classes:
      //Generics can be used to create more generalized classes, like 'Map'




  return (
    <h2>Refer to GenericsNotes.tsx for notes on Generics.</h2>
  )
}

export default GenericsNotes;