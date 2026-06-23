import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-200 to-red-200">
        <h1 className="text-5xl font-bold mb-4">Make Your Home Cooler</h1>

        <p className="text-lg mb-6">Save Electricity. Beat The Heat.</p>

        <Link
          to="/builder"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Start Building
        </Link>
      </div>
    </>
  );
}

export default Home;
