import mongoose from 'mongoose';

const BrotherSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Brother = mongoose.models.Brother || mongoose.model('Brother', BrotherSchema);

const MONGODB_URI = "mongodb+srv://Cluster21379:IXvpnMs1sADIfz3z@cluster21379.ygrme2n.mongodb.net/"; // Replace with your MongoDB URL

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const items = await Brother.find({}); // Query the 'brother' collection
    return res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
