// import tailwindStyles from "../styles/styles";
import { NoFacts } from "./NoFacts";
import FactList from "../types/FactList";
import Fact from "./Fact";

export default function FactList({ facts, setFacts }: FactList) {
  if (facts.length === 0) {
    return <NoFacts />;
  }

  return (
    <section>
      <ul>
        {" "}
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))}
      </ul>
    </section>
  );
}
