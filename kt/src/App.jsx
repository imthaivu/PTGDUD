// Bước 1: Khởi tạo cấu trúc project đã xong

// Bước 2: feat: display a sample product list
// src/App.jsx
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // Bước 8: feat: save and load products from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Bước 3: feat: add a new product
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  // Bước 4: feat: delete product
  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Bước 5 & 6: feat: search and filter products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Product Management</h1>
      <ProductForm onAdd={addProduct} />
      <div className="flex gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>
      <Summary products={filteredProducts} />
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
}

export default App;

// Bước 3: feat: add a new product
// src/components/ProductForm.jsx
import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", price: "", category: "", inventory: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category || !form.inventory) return;
    onAdd({ ...form, price: Number(form.price), inventory: Number(form.inventory) });
    setForm({ name: "", price: "", category: "", inventory: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-1" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" className="border p-1" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border p-1" />
      <input name="inventory" value={form.inventory} onChange={handleChange} placeholder="Inventory" type="number" className="border p-1" />
      <button type="submit" className="col-span-4 bg-blue-500 text-white p-1 mt-2">Add Product</button>
    </form>
  );
}

// // Bước 5: feat: search for products by name
// // src/components/SearchBar.jsx
// export default function SearchBar({ value, onChange }) {
//   return <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search" className="border p-1 w-full" />;
// }

// // Bước 6: feat: filter products by category
// // src/components/CategoryFilter.jsx
// const categories = ["All", "Fashion", "Technology", "Household"];

// export default function CategoryFilter({ value, onChange }) {
//   return (
//     <select value={value} onChange={(e) => onChange(e.target.value)} className="border p-1">
//       {categories.map((cat) => (
//         <option key={cat} value={cat}>{cat}</option>
//       ))}
//     </select>
//   );
// }

// // Bước 7: feat: display total and inventory
// // src/components/Summary.jsx
// export default function Summary({ products }) {
//   const totalInventory = products.reduce((sum, p) => sum + p.inventory, 0);
//   return <p>Total products: {products.length} | Total inventory: {totalInventory}</p>;
// }

// // Bước 2 + 9: feat: display product list & refactor to separate ProductItem
// // src/components/ProductList.jsx
// import ProductItem from "./ProductItem";

// export default function ProductList({ products, onDelete }) {
//   return (
//     <div className="space-y-2">
//       {products.map((p) => (
//         <ProductItem key={p.id} product={p} onDelete={onDelete} />
//       ))}
//     </div>
//   );
// }

// // Bước 9: refactor: separate the ProductItem component
// // src/components/ProductItem.jsx
// export default function ProductItem({ product, onDelete }) {
//   return (
//     <div className="flex justify-between border p-2 items-center">
//       <span>{product.name}</span>
//       <span>${product.price}</span>
//       <span>{product.category}</span>
//       <span>In stock: {product.inventory}</span>
//       <button onClick={() => onDelete(product.id)} className="text-red-600">Delete</button>
//     </div>
//   );
// }
