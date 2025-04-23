export default function ProductItem({ product, onDelete }) {
    return (
      <div className="flex justify-between border p-2 items-center">
        <span>{product.name}</span>
        <span>${product.price}</span>
        <span>{product.category}</span>
        <span>In stock: {product.inventory}</span>
        <button onClick={() => onDelete(product.id)} className="text-red-600">Delete</button>
      </div>
    );
  }