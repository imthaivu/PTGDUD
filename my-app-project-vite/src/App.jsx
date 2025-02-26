import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // State để lưu biểu thức nhập vào
  const [input, setInput] = useState("");

  // Hàm xử lý khi nhấn số hoặc phép toán
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Hàm xử lý khi nhấn nút "C" (clear)
  const handleClear = () => {
    setInput("");
  };

  // Hàm xử lý khi nhấn "=" để tính toán kết quả
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // eval() thực thi biểu thức toán học
    } catch {
      setInput("Error"); // Nếu lỗi, hiển thị "Error"
    }
  };

  return (
    <div className="calculator">
      {/* Màn hình hiển thị số và kết quả */}
      <div className="display">{input || "0"}</div>

      {/* Bàn phím của máy tính */}
      <div className="buttons">
        {/* Nút "C" để xóa màn hình */}
        <button onClick={handleClear} className="clear">C</button>

        {/* Các nút số và phép toán */}
        {[7, 8, 9, "/"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {[4, 5, 6, "*"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {[1, 2, 3, "-"].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>{item}</button>
        ))}
        {[0, ".", "+", "="].map((item) => (
          <button 
            key={item} 
            onClick={() => (item === "=" ? handleCalculate() : handleClick(item))}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
