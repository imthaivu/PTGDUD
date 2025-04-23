export default function SearchBar({ value, onChange }) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search" className="border p-1 w-full" />;
  }