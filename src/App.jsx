import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <>
      {selectedMeal ? (
        <MealDetails
          meal={selectedMeal}
          onBack={() => setSelectedMeal(null)}
        />
      ) : (
        <Home onSelectMeal={setSelectedMeal} />
      )}
    </>
  );
}

export default App;