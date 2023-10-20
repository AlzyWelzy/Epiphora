import { useState } from "react";
import Header from "../components/Header";
import NewFactForm from "../components/NewFactForm";
import Fact from "../types/Fact";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  console.log(facts);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setShowForm={setShowForm} setFacts={setFacts} />
      ) : null}
    </>
  );
}

export default App;
