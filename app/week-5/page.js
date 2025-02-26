'use client';
import { useState } from "react";
import NewItem from "./new-item";


export default function Page() {
  
  const [name, setName] = useState("");
  const [category,setCategory] = useState("produce");
  const handleSubmit=(Event)=>{
    Event.preventDefault();
    const item = {name, quantity, category};
    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setCategory("produce");
  };
  
  return (
    <main>
    <NewItem></NewItem>
    
    <label htmlFor="Itemname"></label><input id= "quantity" placeholder="Item Name" type="text">
    </input>
    <button type="submit" className="bg-white" onClick={handleSubmit}>submit</button>

      <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
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
  
  </main>
  )
   

  
  







}


