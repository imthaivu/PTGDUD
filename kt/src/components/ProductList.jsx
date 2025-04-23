const products = [
    { id: 1, name: "iPhone", price: 999, category: "Technology", inventory: 5 },
    { id: 2, name: "Shirt", price: 29, category: "Fashion", inventory: 10 },
  ];
  
  export default function ProductList() {
    return (
      <div className="p-4">
        {products.map(product => (
          <div key={product.id} className="flex justify-between border p-2 mb-2">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span>{product.category}</span>
            <span>In stock: {product.inventory}</span>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    );
  }
  