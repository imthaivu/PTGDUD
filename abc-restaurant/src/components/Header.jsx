import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1>
        <Link to="/" className="text-xl font-bold">ABC Restaurant</Link>
      </h1>
      <div>
        <ul className="flex">
          <li className="mx-2">
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/menu" className="hover:text-gray-400">Menu</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
          <li className="mx-2">
            <Link to="/booktable" className="hover:text-gray-400">Book a Table</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
