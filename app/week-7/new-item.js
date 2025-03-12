'use client';
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce"); 

  const increment = () => {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const newItem = {
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce"); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 shadow-md text-gray-900 flex flex-col items-center space-y-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border-2 border-gray-500 p-2 rounded-lg"
      />

      
      <div>
        <label htmlFor="category" className="block text-lg font-medium text-gray-700">
          Category
        </label>
        <select
          className="border-2 border-gray-300 p-2 rounded-lg text-lg text-gray-700"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

    
      <div className="flex space-x-2">
        <button
          type="button"
          onClick={decrement}
          className="rounded-lg bg-red-700 hover:bg-red-500 active:bg-red-300 p-3"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          className="rounded-lg bg-emerald-900 hover:bg-emerald-500 active:bg-emerald-300 p-3"
          disabled={quantity === 20}
        >
          +
        </button>
      </div>

      
      <button
        type="submit"
        className="rounded-lg bg-blue-500 hover:bg-blue-400 active:bg-blue-300 p-3"
      >
        Add Item
      </button>
    </form>
  );
}
