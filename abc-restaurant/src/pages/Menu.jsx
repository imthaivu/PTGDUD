import { useEffect, useState } from "react"
import MenuList from "../components/MenuList"
import dataJson from '../data/menu.json'
const Menu = () => {
    const [order, setOrder] = useState([])
    const addToOrder = (item) => {
        setOrder([...order, item])
    }
    const [data, setData] = useState([])
    const [addToOrderData, setToOrderData] = useState([])
    useEffect(()=>{
        setData(dataJson)
        console.log('data', data);
        setToOrderData(dataJson)
    }, [data])
    return (
       
        <div>
            <h1 className="text-center mt-2">Menu</h1>
            <MenuList addToOrder={addToOrder} />
            <h2 className="text-center mt-2">da chon</h2>
            <ul>
                {order.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Menu