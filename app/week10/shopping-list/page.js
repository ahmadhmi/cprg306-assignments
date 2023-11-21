"use client";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { redirect } from "next/navigation";

import ItemList from "./item-list";
import NewIem from "./new-item";
import MealIdeasList from "./meal-ideas-list";
import { getItem, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const loadItems = async () => {
    const loadedItems = await getItem(user.uid);
    setItems(loadedItems);
  };

  useEffect(() => {
    loadItems();
  }, [items]);  
  const handleItemAdd = (item) => {
    let id = addItem(user.uid, item);
    setItems((prevItems) => [...prevItems, {id:id, ...item}]);
  };
  const handleItemClicked = (itemName) => {
    setIngredient(
      itemName
        .replace(/[^a-z\s]+$/i, " ")
        .trim()
        .split(",")[0]
        .replace(" ", "_")
    );
  };

  if (!user) {
    alert("You must be signed in to view this page");
    redirect("/week10", "replace");
  }
  if (user) {
    return (
      <div className="flex">
        <div className="">
          <NewIem onAddItem={handleItemAdd} />
          <ItemList items={items} handleClick={handleItemClicked} />
        </div>
        <div className="m-5">
          <MealIdeasList ingredient={ingredient} />
        </div>
      </div>
    );
  }
}
