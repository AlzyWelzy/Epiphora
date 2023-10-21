// // FactListContainer.js
// import React, { useEffect, useState } from "react";
// import supabase from "./supabase";
// import FactModelList from "./FactList";

// function FactListContainer() {
//   const [facts, setFacts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentCategory, setCurrentCategory] = useState("all");

//   useEffect(() => {
//     async function getFacts() {
//       setIsLoading(true);

//       let query = supabase.from("facts").select("*");

//       if (currentCategory !== "all") {
//         query = query.eq("category", currentCategory);
//       }

//       let { data, error } = await query
//         .order("votesInteresting", { ascending: false })
//         .limit(1000);

//       if (!error) {
//         setFacts(data);
//       } else {
//         alert("There was a problem getting data");
//       }
//       setIsLoading(false);
//     }
//     getFacts();
//   }, [currentCategory]);

//   return <FactList facts={facts} isLoading={isLoading} />;
// }

// export default FactListContainer;
