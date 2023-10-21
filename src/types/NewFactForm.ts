// import FactModel from "./FactModel";
import FactProps from "./FactProps";

export default interface NewFactFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFacts: React.Dispatch<React.SetStateAction<FactProps[]>>;
}
