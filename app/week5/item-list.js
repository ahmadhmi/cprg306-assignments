"use client";
import { useState } from "react";

import itemsData from "./items";
import Item from "./item";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  if (sortBy === "name") itemsData.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "category")
    itemsData.sort((a, b) => a.category.localeCompare(b.category));


  const handleSortByName = (event) => {
    setSortBy(event.target.value);
  };
  const handleSortByCategory = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="p-3">
      <div className="flex gap-4 p-4 ">
        <span className="p-3">Sort by:</span>
        <button className={`bg-rose-700 p-3 rounded-md ${sortBy === "name" ? "bg-lime-700" : ""}`} value="name" onClick={handleSortByName}>
          Name
        </button>
        <button className={`bg-rose-700 p-3 rounded-md ${sortBy === "category" ? "bg-lime-700" : ""}`} value="category" onClick={handleSortByCategory}>
          Category
        </button>
      </div>
      {itemsData.map((list) => <Item item={list} />)}
      
      
    </div>
  );
}
