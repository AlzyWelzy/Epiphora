import { useState } from "react";
import supabase from "../services/supabase";
import CategoryForm from "./CategoryForm";
import { CATEGORIES } from "../data/data";
import useValidUrl from "../hooks/useValidUrl";
import Fact from "../types/Fact";

interface NewFactFormProps {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  setFacts: React.Dispatch<React.SetStateAction<Fact[]>>;
}

export default function NewFactForm({
  setShowForm,
  setFacts,
}: NewFactFormProps) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;
  const isUrlValid = useValidUrl(source); // Call useValidUrl as a hook
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (text && isUrlValid && category && category && text.length <= 200) {
      setIsUploading(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      if (!error) setFacts((facts) => [newFact[0], ...facts]);

      setText("");
      setSource("");
      setCategory("");

      setShowForm(false);
    }
  }

  return (
    // <form className="fact-form hidden display--none">
    <form className="fact-form " onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        title="Share a fact with this world"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>

      <input
        type="text"
        title="Share a fact with this world"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />

      <select
        title="choosing category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>

        {CATEGORIES.map((category) => (
          <CategoryForm key={category.name} category={category} />
        ))}
      </select>
      <button type="submit" className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}
