const UnionTypes = () => {

  //Union types are used when a value can be more than a single type - such as when a property would be a string or number:

  const printJerseyNumber = (jerseyNumber: number | string ) => {
    console.log(`The player's jersey number is ${jerseyNumber}`);
  }

  printJerseyNumber(18); // no error - fits types
  printJerseyNumber('Eighteen'); // no error - fits types
  printJerseyNumber(true) // error - Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

  //Union Type Errors - a coder needs to know what thier types are when union types are being used to avoid errors:
  
  const printJerseyNumber2 = (jerseyNumber: number | string ) => {
    console.log(`The player's jersey number is ${jerseyNumber.toUppercase()}`)
  }

  return (
    <h2>Refer to UnionTypeNotes.tsx for notes of union types.</h2>
  )

}

export default UnionTypes;