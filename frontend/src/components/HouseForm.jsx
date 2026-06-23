function HouseForm() {
  return (
    <div className="bg-white p-5 rounded shadow mt-4">
      <input placeholder="House Name" className="border p-2 mr-2 mb-2" />

      <select className="border p-2 mr-2 mb-2">
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Hyderabad</option>
        <option>Jaipur</option>
        <option>Chennai</option>
        <option>Bhubaneswar</option>
      </select>

      <select className="border p-2 mr-2 mb-2">
        <option>Independent House</option>
        <option>Apartment Top Floor</option>
        <option>Village House</option>
      </select>

      <input type="number" placeholder="Floors" className="border p-2" />
    </div>
  );
}

export default HouseForm;
