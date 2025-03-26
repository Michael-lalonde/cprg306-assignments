export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div
        className="border-2 border-gray-500 p-2 m-2 bg-gray-900 hover:bg-gray-700 rounded-lg cursor-pointer"
        onClick={() => onSelect(name)}
      >
        <h2>{name}</h2>
        <h2>Quantity: {quantity}</h2>
        <h2>Category: {category}</h2>
      </div>
    );
  }