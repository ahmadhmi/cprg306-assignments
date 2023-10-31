"use client";
import { useState } from "react";

import ItemList from "./item-list";
import itemsData from "./items.json";
import NewIem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const handleItemAdd = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const handleItemSelect = (item) => {
    let cleanedStr = item.name.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');
    setSelectedItemName(cleanedStr);
  };

  return (
    <div className="flex">
      <div>
        <NewIem onAddItem={handleItemAdd} />
        <ItemList onItemSelect={handleItemSelect} items={items} />
      </div>
      <div>
        <MealIdeas ingredient={selectedItemName}/>
      </div>
    </div>
  );
}
