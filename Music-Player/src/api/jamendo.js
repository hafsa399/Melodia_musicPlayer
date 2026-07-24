const CLIENT_ID = import.meta.env.VITE_JAMENDO_CLIENT_ID;

const BASE_URL = "https://api.jamendo.com/v3.0";

export async function getPopularSongs() {
    
  try {
     
    const response = await fetch(
      `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=20`
    );

  const data = await response.json();

console.log("Response:", data);
console.log("Status:", response.status);

return data.results;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
export async function getSongsByTag(tag) {
  try {
    const response = await fetch(
      `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=20&tags=${tag}`
    );

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}