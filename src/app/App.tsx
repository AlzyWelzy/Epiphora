import { useState } from "react";

import Header from "../components/Header";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-900 text-white font-sans p-12 font-normal">
      <Header showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}

export default App;
