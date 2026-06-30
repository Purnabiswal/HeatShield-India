import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-green-50 hover:text-green-700"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Leaf className="text-green-600" size={22} />
          </div>

          <div>
            <h1 className="font-bold text-xl text-green-700 leading-none">
              HeatShield
            </h1>

            <p className="text-xs text-gray-500">India</p>
          </div>
        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-2">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>

          <Link to="/builder" className={linkClass("/builder")}>
            Planner
          </Link>

          <Link to="/saved" className={linkClass("/saved")}>
            Saved
          </Link>
        </nav>
      </div>
    </header>
  );
}
