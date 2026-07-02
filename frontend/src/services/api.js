// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://heatshield-india.onrender.com";

export async function calculateSolar(data) {
  const response = await fetch(`${BASE_URL}/planner/calculate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to calculate.");
  }

  return response.json();
}
