interface Category {
  name: string;
  // Add other properties as needed
}

interface CategoryFormProps {
  category: Category;
}

export default function CategoryForm({ category }: CategoryFormProps) {
  return (
    <option value={category.name}>
      {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
    </option>
  );
}
