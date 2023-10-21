import FactModel from "./FactModel";

export default interface FactList {
  isLoading: boolean;
  setFacts: React.Dispatch<React.SetStateAction<FactModel[]>>;
  facts: FactModel[];
}
