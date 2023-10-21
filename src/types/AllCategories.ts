export default interface AllCategoriesProps {
  category: {
    name: string;
    color: string;
  };
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
}
