function MetricsPanel({ solar, coolRoof, trees }) {
  let temperature = 41;
  let bill = 4500;
  let solarGen = 0;

  if (coolRoof) temperature -= 4;
  if (trees) temperature -= 2;
  if (solar) {
    temperature -= 1;
    bill -= 2200;
    solarGen = 350;
  }

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="font-bold text-xl mb-4">Live Metrics</h2>

      <p>Temperature: {temperature}°C</p>

      <p>Bill: ₹{bill}</p>

      <p>Solar: {solarGen} kWh/month</p>

      <p>
        CO₂ Reduction:
        {solar ? " 2.5 Tons" : " 0"}
      </p>
    </div>
  );
}

export default MetricsPanel;
