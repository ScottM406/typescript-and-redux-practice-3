const AliasesAndInterfaces = () => {

  //Typescript allows tyoes to be defined seperately from the variables that use them
  //Aliases and Interfaces allow types to be easily shared between different variables/objects

  //TYPE ALIASES
    //Type Aliases allow defining types with a custom name(an Alias)
    //Type Aliases can be used for primitives like string or number, or more complex types such as arrays and objects.

    type BusinessName = string
    type BusinessSector = string
    type NumberOfEmployees = number
    type GrossRevenue = number
    type IsNonProfit = boolean
    type CurrentChiefExecutive = string
    type Business = {
      name: BusinessName,
      sector: BusinessSector,
      numberOfEmployees: NumberOfEmployees,
      grossRevenue: GrossRevenue,
      isNonProfit: IsNonProfit,
      CEO: CurrentChiefExecutive
    }
    // console.log(Business) --> nothing logs, because Business is a type, not a variable, a type was defined, not a usable object
    // below, I define the usable constants:

    const businessName: BusinessName = "Bob's Sporting Goods";
    const businessSector: BusinessSector = "Retail - Sporting Goods";
    const numberOfEmployees: NumberOfEmployees = 128;
    const grossRevenue: GrossRevenue = 4580200;
    const isNonProfit: IsNonProfit = false;
    const currentChiefExecutive: CurrentChiefExecutive = "Bobby Jangles";
    const business: Business = {
      name: businessName,
      sector: businessSector,
      numberOfEmployees: numberOfEmployees,
      grossRevenue: grossRevenue,
      isNonProfit: isNonProfit,
      CEO: currentChiefExecutive
    };

    console.log(business)

    //Alternatively, it can be done thusly, without using aliases for the properties (I'M GUESSING THAT THIS IS NOT BEST PRACTICE):
    const businessClone: Business = {
      name: "Bob's Sporting Goods",
      sector: "Retail - Sporting Goods",
      numberOfEmployees: 128,
      grossRevenue: 4580200,
      isNonProfit: false,
      CEO: "Bobby Jangles"
    };

    console.log(businessClone);

  //INTERFACES - FROM WHAT I GATHER, THESE WILL BE VERY IMPORTANT
    //Interfaces are similar to type interfaces, except they only apply to object types.

    interface Board {
      height: number,
      width: number,
      length: number
    }

    const fiveFootTwoBySixBoard: Board = {
      height: 6,
      width: 2,
      length: 60
    }
    // console.log(Board) - breaks everything - can't log a type
    console.log(fiveFootTwoBySixBoard); // output - {height: 6, width: 2, length: 60}

    //EXTENDING INTERFACES - Interfaces can extend eachother;s definition
    //This means that a new interface is created with the same properties as the original, plus additinal properties:

    interface DetailedBoard extends Board {
      species: string,
      paint_color: string,
      condition: string,
    }

    const detailedOneFootTwoByFourBoard: DetailedBoard = {
      height: 4,
      width: 2,
      length: 12,
      species: "pine",
      paint_color: "red",
      condition: "fair"
    }

    console.log(detailedOneFootTwoByFourBoard);

  return (
    <div>
      <h2>Refer to AliasesAndInterfacesNotes.tsx for notes on Typescript aliases and interfaces</h2>
    </div>
  )
}

export default AliasesAndInterfaces;