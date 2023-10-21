import FactModel from "./FactModel";

export default interface FactListProps {
  facts: FactModel;
  setFacts: React.Dispatch<React.SetStateAction<FactModel[]>>;
}
