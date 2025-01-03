import { useState } from 'react';

export default function CommentSection() {
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage('Comment added successfully!');
    setComment('');
    setTimeout(() => setSuccessMessage(''), 3000); 
  };

  return (
    <div className="comment-section mx-auto max-w-md p-4 border rounded shadow-md mb-20">
      <h2 className="text-xl font-bold mb-4 text-center">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
          className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button type="submit" 
        className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
            Submit
        </button>
      </form>
      {successMessage && (
        <div className="mt-4 p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded-lg mb-10">
          {successMessage}
        </div>
      )}
    </div>
  );
}
