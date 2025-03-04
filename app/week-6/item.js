
export default function Item({id, name, quantity, category})
{
    return(
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{quantity}</h2>
            <h2>{category}</h2>
        </div>
    )
}