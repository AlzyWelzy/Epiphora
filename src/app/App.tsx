import { useEffect, useState } from "react";
import Header from "../components/Header";
import NewFactForm from "../components/NewFactForm";
import Fact from "../types/Fact";
import supabase from "../services/supabase";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("facts").select("*");

        if (currentCategory != "all") {
          query = query.eq("category", currentCategory);
        }

        try {
          const { data: fetchedFacts, error } = await query
            .order("votesInteresting", { ascending: false })
            .limit(1000);

          if (!error) {
            setFacts(fetchedFacts);
          } else {
            // Handle error in a user-friendly way, e.g., display an error message in the UI.
            console.error("Error fetching data:", error);
          }
        } catch (error) {
          // Handle any unexpected errors here.
          console.error("An unexpected error occurred:", error);
        }

        setIsLoading(false);
      }

      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setShowForm={setShowForm} setFacts={setFacts} />
      ) : null}

      <main className="main"></main>
    </>
  );
}

export default App;
