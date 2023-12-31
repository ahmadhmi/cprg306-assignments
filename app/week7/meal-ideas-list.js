"use client";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await res.json();
  if (data.meals === null) {
    return [];
  }
  return data.meals;
};

export default function MealIdeasList({ ingredient }) {
  const selectedIngredient = ingredient;
  const [mealIdeas, setMealIdeas] = useState(null);
  const loadMealIdeas = async () => {
    // const res = await fetch(
    //   `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    // );
    // const data = await res.json();
    // if (data.meals !== null) {
    //   data.meals.forEach((m) => {
    //     setMealIdeas((mealIdeas) => [...mealIdeas, m.strMeal]);
    //   });
    // }
    if (!ingredient) {
      setMealIdeas(null);
      return;
    }
    setMealIdeas(await fetchMealIdeas(ingredient));
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);
  return (
    <div>
      {!mealIdeas && (
        <h1 className="text-gray-50">Select an item to see meal ideas</h1>
      )}
      {mealIdeas && mealIdeas.length > 0 && <p>Here are some meal ideas using {ingredient}:</p>}
      {mealIdeas && mealIdeas.length == 0 && <p>There are no meal ideas for {ingredient}</p>}  
      {mealIdeas && (
        <ul>
          {mealIdeas.map((m) => (
            <li className="p-2 m-2 hover:my-4 hover:ease-auto hover:duration-500 hover:cursor-pointer text-stone-50 bg-violet-950 max-w-md" key={m.keyMeal}>
              {m.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
