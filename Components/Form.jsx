import { useEffect, useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`);
        const data = await response.json();
        setComments(data.comments || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setComment('');
        setComments((prev) => [...prev, { text: comment }]);
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        console.error('Error adding comment:', data.message);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div className="comment-section mx-auto max-w-md p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          Submit
        </button>
      </form>
      {successMessage && (
        <div className="mt-4 p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded-lg">
          {successMessage}
        </div>
      )}
      <ul className="mt-6 space-y-2">
        {comments.map((c, index) => (
          <li
            key={index}
            className="p-3 bg-gray-100 border border-gray-200 rounded-lg shadow-sm"
          >
            {c.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
