import { useState } from "react";
// import FactModel from "../types/FactProps";
import supabase from "../services/supabase";
import { CATEGORIES } from "../data/data";
import FactType from "../types/FactType";
// import FactListProps from "../types/FactListPropsProps";

interface FactProps {
  fact: FactType;
  setFacts: React.Dispatch<React.SetStateAction<FactType[]>>;
}

export default function Fact({ fact, setFacts }: FactProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(columnName: string) {
    setIsUpdating(true);

    // Ensure that the value is a number before performing addition
    if (typeof fact[columnName] === "number") {
      const { data: updatedFact, error } = await supabase
        .from("facts")
        .update({ [columnName]: (fact[columnName] as number) + 1 }) // Use type assertion to specify it's a number
        .eq("id", fact.id)
        .select();

      setIsUpdating(false);

      if (!error) {
        setFacts((facts) =>
          facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
        );
      }
    } else {
      console.error(
        `Cannot increment a non-numeric value in column: ${columnName}`
      );
      setIsUpdating(false);
    }
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">🛑 [DISPUTED] </span> : null}

        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          background:
            CATEGORIES.find((category) => category.name === fact.category)
              ?.color || "",
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          👍 {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          🤯 {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          ⛔️ {fact.votesFalse}
        </button>
      </div>
    </li>
  );
}
