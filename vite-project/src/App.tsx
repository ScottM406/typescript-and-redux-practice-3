import TypeNotes from "./Note-Components/TypesNotes";
import ArrayNotes from "./Note-Components/ArrayNotes";
import TupleNotes from "./Note-Components/TupleNotes";
import ObjectTypeNotes from "./Note-Components/ObjectTypeNotes";
import EnumNotes from "./Note-Components/EnumNotes";
import AliasesAndInterfaces from "./Note-Components/AliasesAndInterfacesNotes";
import UnionTypes from "./Note-Components/UnionTypeNotes";

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
    </>
  )
}

export default App