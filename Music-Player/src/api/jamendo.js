const CLIENT_ID = import.meta.env.VITE_JAMENDO_CLIENT_ID;

const BASE_URL = "https://api.jamendo.com/v3.0";
const CACHE_DURATION = 10 * 60 * 1000;

function getCachedSongs(cacheKey) {
  try {
    const cached = localStorage.getItem(cacheKey);

    if (!cached) {
      return null;
    }

    const { data, timestamp } = JSON.parse(cached);

    if (!timestamp || Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(cacheKey);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error reading songs cache:", error);
    localStorage.removeItem(cacheKey);
    return null;
  }
}

function setCachedSongs(cacheKey, data) {
  try {
    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      })
    );
  } catch (error) {
    console.error("Error saving songs cache:", error);
  }
}

export async function getPopularSongs() {
  const cacheKey = "popular-songs";
  const cachedSongs = getCachedSongs(cacheKey);

  if (cachedSongs) {
    return cachedSongs;
  }
    
  try {
     
    const response = await fetch(
      `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=20`
    );

  const data = await response.json();

console.log("Response:", data);
console.log("Status:", response.status);

setCachedSongs(cacheKey, data.results);

return data.results;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
export async function getSongsByTag(tag) {
  const cacheKey = `songs-by-tag-${tag}`;
  const cachedSongs = getCachedSongs(cacheKey);

  if (cachedSongs) {
    return cachedSongs;
  }

  try {
    const response = await fetch(
      `${BASE_URL}/tracks/?client_id=${CLIENT_ID}&format=json&limit=20&tags=${tag}`
    );

    const data = await response.json();

    setCachedSongs(cacheKey, data.results);

    return data.results;
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
