import FactModel from "./FactModel";

export default interface FactProps {
  fact: FactModel;
  setFacts: React.Dispatch<React.SetStateAction<FactModel[]>>;
}
