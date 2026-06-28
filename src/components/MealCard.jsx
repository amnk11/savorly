import React, { useEffect, useState } from "react";

function MealCard({ onSelectMeal }) {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/meals",
      );

      const resData = await response.json();
      const allData = resData.data.data;

      setRecipes(allData);
      console.log(allData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#F1F1F1] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(17,24,39,0.06)] md:px-10 lg:px-16">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#4CAF50]">
              Popular Recipes
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#1F2937] md:text-4xl">
              Delicious Dishes
            </h2>
          </div>

          <button className="hidden text-sm font-medium text-[#4CAF50] transition hover:text-[#43A047] md:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#4CAF50] hover:shadow-[0_12px_32px_rgba(17,24,39,0.12)]"
            >
              <div className="overflow-hidden">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="line-clamp-2 text-xl font-semibold text-[#1F2937]">
                  {recipe.strMeal}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#4CAF50]">
                  {recipe.strArea}
                </p>

                <p className="mt-3 line-clamp-1 text-sm text-[#6B7280]">
                  {recipe.strTags || "No tags available"}
                </p>

                <button
                  className="mt-6 w-full rounded-xl bg-[#4CAF50] py-3 font-medium text-white transition-all duration-300 hover:bg-[#43A047]"
                  onClick={() => onSelectMeal(recipe)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MealCard;
