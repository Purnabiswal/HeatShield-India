import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">HeatShield India</h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/builder">Builder</Link>
        <Link to="/saved">Saved Houses</Link>
      </div>
    </nav>
  );
}

export default Navbar;
