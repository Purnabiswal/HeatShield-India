import Navbar from "../components/Navbar";

function SavedHouses() {
  const houses = [
    {
      id: 1,
      name: "Delhi Home",
      city: "Delhi",
      temp: 35,
      bill: 2300,
    },
    {
      id: 2,
      name: "Village House",
      city: "Bhubaneswar",
      temp: 37,
      bill: 3000,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Saved Houses</h1>

        <div className="grid md:grid-cols-2 gap-4">
          {houses.map((house) => (
            <div key={house.id} className="border p-4 rounded shadow">
              <h2 className="font-bold text-xl">{house.name}</h2>

              <p>City: {house.city}</p>
              <p>Temperature: {house.temp}°C</p>
              <p>Bill: ₹{house.bill}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedHouses;
