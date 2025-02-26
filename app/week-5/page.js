'use client';
import { useState } from "react";
import NewItem from "./new-item";


export default function Page() {
  
  const [name, setName] = useState("");
  const [category,setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);
  
  const handleSubmit=(Event)=>{
    Event.preventDefault(); 
    const item = {name, quantity, category};
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
     setQuantity(1)
  };
  
  return (
    <main className=" bg-black flex justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-lg rounded-lg p-8 space-y-6 w-1/4 max-w-md">
      <div className="text-lg text-gray-700">
      <label htmlFor="quantity"></label>Quantity
      <NewItem quantity={quantity} setQuantity={setQuantity} /> 
      </div>

    
      <div className="space-y-2">
          <label htmlFor="Itemname" className="block text-sm font-medium text-gray-700"></label>
          <input
            id="Itemname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="text-lg font-medium text-gray-700"
            required
          />
      </div>

   

      <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
          <select
            className="text-lg text-gray-700"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
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
      <button className="text-gray-700"type="submit">Submit</button>
      </form>
  </main>
  )
  
}


