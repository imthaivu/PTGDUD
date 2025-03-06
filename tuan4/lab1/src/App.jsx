import { useState, useEffect } from 'react';  
import axios from "axios";
import './App.css';
import Items from './components/Item.jsx';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("https://67c83ca60acf98d0708589e8.mockapi.io/api/data/items");
        setItems(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <Items items={items} />  
    </>
  );
}

export default App;