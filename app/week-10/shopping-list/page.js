'use client';

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  }

  async function handleAddItem(newItem) {
    try {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id }]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  }

  const handleItemSelect = (itemName) => {
    const nameWithoutSize = itemName.split(",")[0];
    const cleanedName = nameWithoutSize.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    const finalName = cleanedName.trim();
    setSelectedItemName(finalName);
  };

  const sortByName = () => {
    const sortedItems = [...items].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setItems(sortedItems);
  };

  const sortByCategory = () => {
    const sortedItems = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setItems(sortedItems);
  };

  if (user === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-cyan-600 p-5 min-h-screen flex flex-col items-center">
      <NewItem onAddItem={handleAddItem} />
      <div className="my-4 flex flex-col items-center">
        <div className="flex space-x-2">
          <button
            className="bg-yellow-400 rounded-lg m-2 p-2"
            onClick={sortByName}
          >
            Sort by Name
          </button>
          <button
            className="bg-green-400 rounded-lg m-2 p-2"
            onClick={sortByCategory}
          >
            Sort by Category
          </button>
        </div>
      </div>
      <div className="flex w-full max-w-6xl space-x-8">
        <div className="flex-1">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </div>
  );
}