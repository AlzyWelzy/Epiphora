import FactType from "./FactType";

export default interface FactListProps {
  facts: FactType[]; // This specifies that facts is an array of FactType objects
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>; // This specifies the type for setFacts
}
