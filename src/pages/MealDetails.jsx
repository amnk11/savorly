import React from "react";

function MealDetails({ meal, onBack }) {
  return (
    <section className="bg-white py-8">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#F1F1F1] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(17,24,39,0.06)] md:px-10 lg:px-16">
        <button
          onClick={onBack}
          className="mb-8 rounded-xl border border-[#EAEAEA] bg-white px-5 py-2 font-medium text-[#1F2937] transition hover:bg-[#F8F9FA]"
        >
          ← Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="h-125 w-full rounded-3xl object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold text-[#1F2937]">
              {meal.strMeal}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#EEF8EF] px-4 py-2 text-sm font-medium text-[#4CAF50]">
                {meal.strCategory}
              </span>

              <span className="rounded-full bg-[#FFF3EA] px-4 py-2 text-sm font-medium text-[#F57C1F]">
                {meal.strArea}
              </span>
            </div>

            <p className="mt-8 text-lg leading-8 text-[#6B7280]">
              {meal.strInstructions}
            </p>

            <div className="mt-10">
              <h2 className="mb-5 text-2xl font-semibold text-[#1F2937]">
                Ingredients
              </h2>

              <ul className="space-y-3">
                {[
                  meal.strIngredient1,
                  meal.strIngredient2,
                  meal.strIngredient3,
                  meal.strIngredient4,
                  meal.strIngredient5,
                  meal.strIngredient6,
                  meal.strIngredient7,
                  meal.strIngredient8,
                  meal.strIngredient9,
                  meal.strIngredient10,
                ]
                  .filter(Boolean)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[#4B5563]"
                    >
                      <span className="text-[#4CAF50]">✔</span>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex rounded-xl bg-[#F57C1F] px-8 py-4 font-semibold text-white transition hover:bg-[#E86F0F]"
              >
                ▶ Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MealDetails;
