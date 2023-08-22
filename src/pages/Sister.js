// Sister.js

import { connectToMongoDB } from '@/pages/Api/Mongodb/mongodb'; // Adjust the import path as needed

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { client, collection } = await connectToMongoDB();

    const items = await collection.find({}).toArray(); // Retrieve all documents

    // Close the MongoDB connection when done
    await client.close();

    return res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
