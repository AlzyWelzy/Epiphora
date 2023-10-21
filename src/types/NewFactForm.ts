// import FactModel from "./FactModel";
import FactType from "./FactType";
export default interface NewFactFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>; // Correct type
}
