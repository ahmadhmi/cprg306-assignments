"use client";
import { useState } from "react";

import ItemList from "./item-list";
import itemsData from "../week5/items.json";
import NewIem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleItemAdd = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <NewIem onAddItem={handleItemAdd} />
      <ItemList items={items} />
    </div>
  );
}
