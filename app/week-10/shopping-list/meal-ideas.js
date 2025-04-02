"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} className="mb-2">
              <div className="flex items-center">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <span>{meal.strMeal}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}.</p>
      )}
    </div>
  );
}