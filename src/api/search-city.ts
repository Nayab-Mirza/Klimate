import { VercelRequest, VercelResponse } from '@vercel/node';
import { weatherAPI } from './weather'; // Adjust if path differs

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const data = await weatherAPI.searchLocations(query);
    res.status(200).json(data);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch city data' });
  }
}
