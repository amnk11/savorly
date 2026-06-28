import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MealCard from "../components/MealCard";

function Home({ onSelectMeal }) {
  return (
    <>
      <Navbar />
      <Hero />
      <MealCard onSelectMeal={onSelectMeal} />
    </>
  );
}

export default Home;