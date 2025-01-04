const EnumNotes = () => {

  //An 'enum' is a special "class" that represents a group of constants.
    //Enums come in tww verieties - 'string' and 'numeric'

  //Numeric Enums - Default
    //By default, enums will initialize the first value to 0, and add 1 to each additional value:

    enum CardSuits {
      Hearts,
      Spades,
      Diamonds,
      Clubs
    };

    let firstSuit = CardSuits.Hearts;
    let lastSuit = CardSuits.Clubs;
    console.log(firstSuit); // logs the default at initialization - 0
    console.log(lastSuit); // logs the default at initialization - 3. each value is increased by an increment of 1, making index three 3.
    firstSuit - 'Hearts'; //error: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

  //Numeric Enums - Initialized
    //A coder can set the value of the first numeric enum and have it auto increment from that:

    enum DefensiveStats {
      Picks = 2,
      FumbleRecoveries,
      Forcedfumbles,
      Sacks 
    };

    console.log(DefensiveStats.Picks); // logs 2 - the amount specified on initialization.
    console.log(DefensiveStats.FumbleRecoveries); // logs 3 - the amount specified for the first value (Picks=2) +1.
    console.log(DefensiveStats.Sacks); // logs 5 - the amount specified for the first value (Picks=2) +3.

  //Numeric Enums - Fully Intialized
    //A coder can assign unique number values to each enum value. These values will not increment automatically:

    enum QuarterbackStats {
      Attempts = 33,
      Completions = 27,
      Yards = 340,
      Touchdowns = 4,
      Interceptions = 1,
      Long = 56,
    };

    console.log(QuarterbackStats.Yards) //logs 340 - the amount set at initialization.
    console.log (QuarterbackStats.Long) // logs 56 - the amount set at initialization.
    //NOTE - if another property were given and no value assigned, it would log 57, beacuse by defualt, enum increments by 1.

  //String Enums - Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
    
    enum PersonalDetails {
      FirstName = "Tony",
      LastName = "Gunk",
      Address = "3720 The Wy. apt X",
      PhoneNumber = "(888)301-8490"
    };

    console.log(PersonalDetails.FirstName) //logs Tony
    console.log(PersonalDetails.Address) //logs 3720 The Wy. apt X

  return (
    <div>
      <h2>Refer to EnumNotes.tsx in VScode for notes on Enums.</h2>
    </div>
  )
  
}

export default EnumNotes;