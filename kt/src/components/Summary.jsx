export default function Summary({ products }) {
    const totalInventory = products.reduce((sum, p) => sum + p.inventory, 0);
    return <p>Total products: {products.length} | Total inventory: {totalInventory}</p>;
  }