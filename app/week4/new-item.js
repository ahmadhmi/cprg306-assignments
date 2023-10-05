"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const categoryList = [
    "Produce",
    "Dairy",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Bakery",
    "Beverages",
    "Snacks",
    "Household",
    "Personal Care",
    "Other",
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, quantity, category);
    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };
    console.log(item);
    alert(`item:${quantity} ${name} of ${category} is added to the list`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-2/5 p-2 bg-indigo-900 bg-opacity-20 gap-4 rounded-md"
    >
      <input
        className="rounded-lg p-3 text-gray-800 border-2 border-indigo-600"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Item name"
        required={true}
      />
      <div className="flex justify-between">
        <input
          className="text-gray-800 rounded-lg w-20 font-sans p-2 border-2 border-indigo-600"
          type="number"
          min={1}
          max={99}
          value={quantity}
          onChange={handleQuantityChange}
          required
        />

        <select
          className="rounded-lg p-3 text-gray-800 font-sans border-2 border-indigo-600"
          value={category}
          onChange={handleCategoryChange}
        >
          {" "}
          {categoryList.map((c) => (
            <option value={c}>{c}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-violet-800 w-100% h-10 rounded-lg ">
        Add Item
      </button>
    </form>
  );
}
