import { useState } from 'react'
import './App.css'

function App() {
  const [invest, setInvest] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [results, setResults] = useState([]);


  const calculateInvestment = () => {
    let year = new Date().getFullYear();
    let investCal = parseFloat(invest);
    let rateCal = parseFloat(rate) / 100;
    let goalCal = parseFloat(goal);

    // Kiểm tra đầu vào hợp lệ
    if (isNaN(investCal) || isNaN(rateCal) || isNaN(goalCal) || investCal <= 0 || rateCal <= 0 || goalCal <= 0) {
      alert("Vui lòng nhập số hợp lệ.");
      return;
    }

    console.log("Bắt đầu năm:", year);
    console.log("Đầu tư ban đầu:", investCal);
    console.log("Lãi suất hàng năm:", rateCal);
    console.log("Mục tiêu:", goalCal);

    let calculations = [];

    while (investCal < goalCal) {
      let newInvestCal = investCal + investCal * rateCal; 
      calculations.push({
        year: year,
        invest: investCal.toFixed(0),
        rate: (rateCal * 100), 
        result: newInvestCal.toFixed(0)
      });
      investCal = newInvestCal;
      year++; 
    }
    setResults(calculations);
    console.log("Kết quả tính toán:", calculations);
};


  return (
    <div className="container">
      <div className="header">
        <h2>Investment Calculator</h2>
      </div>

      <div className="content">
        <div className="box">
          <label>Invest</label>
          <input type="text" value={invest} onChange={(e) => setInvest(e.target.value)} />
        </div>
        <div className="box">
          <label>Rate (%)</label>
          <input type="text" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>
        <div className="box">
          <label>Goal</label>
          <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
        </div>
        <button onClick={calculateInvestment}>Cal</button>
      </div>

      <div className="footer">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Rate (%)</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.invest}</td>
                <td>{row.rate}%</td>
                <td>{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
