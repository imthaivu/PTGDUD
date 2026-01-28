import { useMemo, useState } from 'react'
import './App.css'

type Product = {
  id: number
  name: string
  price: number
}

// mock 5000 products
const PRODUCTS: Product[] = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `Product ${i}`,
  price: Math.floor(Math.random() * 1000) + 1
}))

function App() {
  const [search, setSearch] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)

  // ❌ KHÔNG useMemo (để so sánh)
  console.time('filter-without-memo')
  const filteredWithoutMemo = PRODUCTS.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price >= minPrice &&
      p.price <= maxPrice
  )
  console.timeEnd('filter-without-memo')

  // ✅ DÙNG useMemo
  console.time('filter-with-memo')
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(
      p =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        p.price >= minPrice &&
        p.price <= maxPrice
    )
  }, [search, minPrice, maxPrice])
  console.timeEnd('filter-with-memo')

  // ✅ Tổng tiền dùng useMemo
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0)
  }, [filteredProducts])

  return (
    <>
      <h1>Product Filter</h1>

      <input
        placeholder="Search name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={e => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={e => setMaxPrice(Number(e.target.value))}
      />

      <p>Products: {filteredProducts.length}</p>
      <p>Total price: {totalPrice}</p>
    </>
  )
}

export default App
