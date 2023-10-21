import AllCategoriesProps from "../types/AllCategories";

export default function AllCategories({
  setCurrentCategory,
  category,
}: AllCategoriesProps) {
  return (
    <li className="category">
      <button
        style={{ backgroundColor: category.color }}
        className="btn btn-category"
        onClick={() => setCurrentCategory(category.name)}
      >
        {category.name}
      </button>
    </li>
  );
}
