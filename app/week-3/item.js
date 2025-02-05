export default function Item({ name, quantity, category })
{
    return (
        <main className="w-1/4 p-2 mb-2 bg-emerald-900 rounded-md shadow-md">
     
            <h1 className="text-xl font-bold text-white">{name}</h1>
            <h2 className="text-gray-400">Buy {quantity} in {category} </h2>
        
        </main>
    );
  };
  




 