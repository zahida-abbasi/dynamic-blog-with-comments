export default function handler(req, res) {
    if (req.method === 'POST') {
      const { comment } = req.body;
      if (comment) {
        res.status(200).json({ message: 'Comment added successfully!' });
      } else {
        res.status(400).json({ message: 'Comment cannot be empty.' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }
