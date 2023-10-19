"use client";
import { useState } from "react";

import Item from "../week5/item";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  console.log(items);
  
  const array = [...items]; 

  if (sortBy === "name") 
    array.sort((a, b) => a.name.localeCompare(b.name));
  
  if (sortBy === "category")
    array.sort((a, b) => a.category.localeCompare(b.category));


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
      {array.map((item) => <Item key={item.id} item={item} />)}
      
      
    </div>
  );
}
