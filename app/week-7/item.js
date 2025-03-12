
export default function Item({id, name, quantity, category})
{
    return(
        <div className="border-2 border-gray-500 p-2 m-2 bg-gray-900 hover:bg-gray-700 rounded-lg">
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{quantity}</h2>
            <h2>{category}</h2>
        </div>
    )
}