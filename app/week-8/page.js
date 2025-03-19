"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: Date.now() },
    ]);
  };

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