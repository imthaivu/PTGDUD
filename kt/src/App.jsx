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


// // Bước 5: feat: search for products by name
// src/components/SearchBar.jsx


// // Bước 6: feat: filter products by category
// // src/components/CategoryFilter.jsx


// // Bước 7: feat: display total and inventory
// // src/components/Summary.jsx


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
