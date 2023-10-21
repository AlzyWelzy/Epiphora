// import tailwindStyles from "../styles/styles";
import { NoFacts } from "./NoFacts";
import Fact from "./Fact";
import FactListProps from "../types/FactListPropsProps";

export default function FactList({ facts, setFacts }: FactListProps) {
  if (facts.length === 0) {
    return <NoFacts />;
  }

  return (
    <section>
      <ul>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
    </section>
  );
}
