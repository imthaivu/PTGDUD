import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");

  const style = { margin: "0 10px", fontSize: "20px", fontWeight: "bold" };

  function handleCalculate() {
    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Lỗi: Nhập số hợp lệ");
      return;
    }

    const res = numA + numB;
    setResult
    setResult(res);
  }

  return (
    <>
      
      <input type="text" value={valueA} onChange={(e) => setValueA(e.target.value)} placeholder="Nhập số A" />

      <span style={style}>+</span>

      <input type="text" value={valueB} onChange={(e) => setValueB(e.target.value)} placeholder="Nhập số B" />
      
      <br />
      <br />

      <button onClick={handleCalculate}>Tính</button>
      
      <br />
      <br />

      <span>Kết quả: {result}</span>
    </>
  )
}

export default App
