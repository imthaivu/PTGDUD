const categories = ["All", "Fashion", "Technology", "Household"];

export default function CategoryFilter({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="border p-1">
      {categories.map((cat) => (
        <option key={cat} value={cat}>{cat}</option>
      ))}
    </select>
  );
}