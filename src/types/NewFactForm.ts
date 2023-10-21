import FactModel from "./FactModel";
export default interface NewFactFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFacts: React.Dispatch<React.SetStateAction<FactModel[]>>;
}
