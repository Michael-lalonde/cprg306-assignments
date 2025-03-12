"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newItem, id: Date.now() }, 
    ]);
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
    <div className="bg-blue-300 p-5">
      <NewItem onAddItem={handleAddItem} />
      <div className="my-4">
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
      <ItemList items={items} />
    </div>
  );
}
