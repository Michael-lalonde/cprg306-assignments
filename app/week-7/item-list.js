"use client";
import Item from "./item";

export default function ItemList({ items }) {
  const sortedItems = [...items];

  return (
    <div>
      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            name={item.name} 
            quantity={item.quantity} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}
