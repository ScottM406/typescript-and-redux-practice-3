import TypeNotes from "./Note-Components/TypesNotes";
import ArrayNotes from "./Note-Components/ArrayNotes";
import TupleNotes from "./Note-Components/TupleNotes";
import ObjectTypeNotes from "./Note-Components/ObjectTypeNotes";
import EnumNotes from "./Note-Components/EnumNotes";
import AliasesAndInterfaces from "./Note-Components/AliasesAndInterfacesNotes";
import UnionTypes from "./Note-Components/UnionTypeNotes";
import Functions from "./Note-Components/FunctionNotes";
import Casting from "./Note-Components/CastingNotes";

function App() {

  return (
    <>
      <h1>Typescript Basics!</h1>
      <TypeNotes />
      <ArrayNotes />
      <TupleNotes />
      <ObjectTypeNotes />
      <EnumNotes />
      <AliasesAndInterfaces />
      <UnionTypes />
      <Functions />
      <Casting />
    </>
  )
}

export default App