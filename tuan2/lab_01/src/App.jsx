import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState(""); // Giá trị hiển thị sau khi click

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    setDisplayValue(value); // Cập nhật giá trị hiển thị khi click
    console.log(value); // In ra giá trị hiện tại
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <span>Value: {displayValue}</span>
    </div>
  );
}

export default App
