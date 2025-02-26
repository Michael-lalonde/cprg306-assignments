'use client';
import { useState } from "react";

export default function NewItem({ quantity, setQuantity })  {
  
  
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

 
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-3 shadow-md flex items-center justify-center space-x-1">
        <div className="border-2 border-white p-3 rounded-lg">
    
        <div className="text-xl font-semibold">{quantity}</div>

            <button type="button" className= "rounded-lg bg-red-700 hover:bg-red-500 active:bg-red-300 p-3"onClick={decrement} disabled={quantity === 1}> 
          -
            </button>
        
        
            <button type="button" className="rounded-lg bg-emerald-900 hover:bg-emerald-500 active:bg-emerald-300 p-3"
          onClick={increment}
          disabled={quantity === 20}
            >
          +
         </button>
        </div>
        
    </div>
   
   
);
}

