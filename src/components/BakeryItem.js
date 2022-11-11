// TODO: create a component that displays a single bakery item
import { useState } from "react";

export default function BakeryItem({item, handleClick}){

    const [count, setCount] = useState(1);

    return (
        <div>
            <h3>{item.name}</h3>
            {item.description}<br></br>
            Price: {item.price}<br></br>
            <img src={item.image}/>
            <br></br>
            <button onClick={() => handleClick(item.name, item.price, count, setCount)}>Add to Cart</button>
            <br></br><br></br>
           

        </div>

    );
}
