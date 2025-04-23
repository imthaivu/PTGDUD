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