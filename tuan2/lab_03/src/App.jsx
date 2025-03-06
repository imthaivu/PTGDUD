import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function handleOperatorChange(event) {
    setOperator(event.target.value);
  }

  function handleCalculate() {
    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Lỗi: Nhập số hợp lệ");
      return;
    }

    let res;
    switch (operator) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "*":
        res = numA * numB;
        break;
      case "/":
        res = numB !== 0 ? numA / numB : "Không thể chia cho 0";
        break;
      default:
        res = "Chọn phép toán";
    }

    setResult(res);
  }

  return (
    <>
      <p>Nhập số a:</p>
      <input
        type="text"
        value={valueA}
        onChange={(e) => setValueA(e.target.value)}
        placeholder="Nhập số A"
      />
      <br />
      <p>Nhập số b:</p>
      <input
        type="text"
        value={valueB}
        onChange={(e) => setValueB(e.target.value)}
        placeholder="Nhập số B"
      />
      <br />
      <br />
      <input type="radio" name="operator" value="+" onChange={handleOperatorChange} /> +
      <input type="radio" name="operator" value="-" onChange={handleOperatorChange} /> -
      <input type="radio" name="operator" value="*" onChange={handleOperatorChange} /> *
      <input type="radio" name="operator" value="/" onChange={handleOperatorChange} /> /
      <br />
      <br />
      <button onClick={handleCalculate}>Tính</button>
      <br />
      <br />
      <span>Kết quả: {result}</span>
    </>
  );
}

export default App
