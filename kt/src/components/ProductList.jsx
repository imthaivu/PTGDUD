import ProductItem from "./ProductItem";

export default function ProductList({ products, onDelete }) {
  return (
    <div className="space-y-2">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}