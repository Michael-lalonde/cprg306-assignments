"use client"
import { useState } from "react"
import Item from "./item"  // Capitalized component name
import items from "./items.json"  // Corrected import path

export default function Page() {  // Capitalized component name
    const [list, setList] = useState(items)  // Initialize state with items

    const sortByName = () => {
        let newItems = items.toSorted((item1, item2) => {
            if (item1.name > item2.name)
                return 1;
            else if (item1.name === item2.name)
                return 0;
            else return -1;
        });
        setList(newItems);  // Update state with sorted items
    }

    const sortByCategory = () => {
        let newItems = items.toSorted((item1, item2) => {
            if (item1.category > item2.category)
                return 1;
            else if (item1.category === item2.category)
                return 0;
            else return -1;
        });
        setList(newItems);  // Update state with sorted items
    }

    return (
        <div className="bg-blue-300">
            <main>
                <button className="bg-yellow-400 rounded-lg m-2 p-2" onClick={sortByName}>Sort by Name</button>
                <button className="bg-green-400 rounded-lg m-2 p-2" onClick={sortByCategory}>Sort by Category</button>
                {
                    list.map((item) => {
                        return (
                            <Item key={item.id} id={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        )
                    })
                }
            </main>
        </div>
    )
}