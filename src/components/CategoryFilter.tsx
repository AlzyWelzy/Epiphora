import { CATEGORIES } from "../data/data";
import CategoryFilterProps from "../types/CategoryFilter";
import AllCategories from "./AllCategories";

export default function CategoryFilter({
  setCurrentCategory,
}: CategoryFilterProps) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category) => (
          <AllCategories
            setCurrentCategory={setCurrentCategory}
            key={category.name}
            category={category}
          />
        ))}
      </ul>
    </aside>
  );
}
