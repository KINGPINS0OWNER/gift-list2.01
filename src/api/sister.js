import mongoose from 'mongoose';
import config from '../../config'; // Adjust the path as needed

const SisterItemSchema = new mongoose.Schema({
  ID: Number,
  Item: String,
  Price: Number,
  Availability: String,
}, {
  collection: 'sister', // Specify the collection name here
});

const SisterItem = mongoose.models.SisterItem || mongoose.model('SisterItem', SisterItemSchema);

mongoose.connect(config.mongodbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end(); // Method Not Allowed
    }

    const items = await SisterItem.find({});
    return res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
