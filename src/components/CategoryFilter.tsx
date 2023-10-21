import CategoryFilterProps from "../types/CategoryFilter";

export default function CategoryFilter({
  setCurrentCategory,
}: CategoryFilterProps) {
  <aside>
    <ul>
      <li className="category">
        <button
          className="btn btn-all-categories"
          onClick={() => setCurrentCategory("all")}
        ></button>
      </li>
    </ul>
  </aside>;
}
