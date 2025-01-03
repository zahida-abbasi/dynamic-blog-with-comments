export default function handler(req, res) {
    if (req.method === 'POST') {
      const { comment } = req.body;
      // Save comment to database (logic add karen)
      res.status(200).json({ message: 'Comment added successfully!' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }