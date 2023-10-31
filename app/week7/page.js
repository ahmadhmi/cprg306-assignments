"use client";
import { useState } from "react";

import ItemList from "./item-list";
import itemsData from "../week5/items.json";
import NewIem from "./new-item";
import MealIdeasList from "./meal-ideas-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [ingredient, setIngredient] = useState(null);


  const handleItemAdd = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const handleItemClicked = (itemName) => {
    setIngredient(itemName.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_'));
  };

  return (
    <div className="flex">
      <div className="">
        <NewIem onAddItem={handleItemAdd} />
        <ItemList items={items} handleClick={handleItemClicked}/>
      </div>
      <div className="m-5">
      <MealIdeasList ingredient={ingredient} />
      </div>
    </div>
  );
}
