import FactModel from "./FactModel";

export default interface FactProps {
  facts: FactModel;
  setFacts: React.Dispatch<React.SetStateAction<FactModel[]>>;
}
