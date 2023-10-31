"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const { meals } = await res.json();
  return meals;
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    setMeals(await fetchMealIdeas(ingredient));
  };
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      {meals ? <h1>Here are some meal ideas using {ingredient}:</h1> : <h1>No meal Ideas for {ingredient}</h1> }
      <ul>
        {meals && meals.map((m) => (
          <li className="text-white" key={m.idMeal}>
            {m.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
