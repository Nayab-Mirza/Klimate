// api/search-city.ts
import { NextApiRequest, NextApiResponse } from 'next';  // Import Next.js types for req and res
import { weatherAPI } from '../api/weather';  // Import your Weather API

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the query parameter (city name) from req.query
  const { query } = req.query;

  // Check if query is provided
  if (!query || Array.isArray(query)) {
    return res.status(400).json({ error: "City query parameter is required" });
  }

  try {
    // Fetch data from weatherAPI using the query (city name)
    const data = await weatherAPI.searchLocations(query);

    // Send back the data as JSON
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch city data' });
  }
}
