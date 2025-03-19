
import { useState, useEffect } from "react";
import dataJson from '../data/menu.json'
const MenuList = ({ addToOrder }) => {
    const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("data/menu.json")
    //         .then((res) => res.json())
    //         .then((data) => setMenu(data));
    // }, []);
    useEffect(()=>{
        setMenu(dataJson)
        console.log('data', menu);
        // setToOrderData(dataJson)
    }, [menu])
    return (
        <div className="grid grid-cols-3 gap-4">
            {menu.map((item) => (
                <div key={item.id} className="border p-4">
                    <h2>{item.name}</h2>
                    <img className="w-200" src={item.image} alt={item.name} />
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <button onClick={() => addToOrder(item)}>Add to Order</button>
                </div>
            ))}
        </div>
    );
}
export default MenuList


