import { useEffect, useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch comments from API
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`);
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
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
    <div className="comment-section">
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {successMessage && <div className="success-popup">{successMessage}</div>}
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c.text}</li>
        ))}
      </ul>
      <style jsx>{`
        .comment-section {
          max-width: 400px;
          margin: 0 auto;
        }
        textarea {
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 2px solid #ccc;
        }
        button {
          padding: 10px 20px;
          background-color: #4caf50;
          margin-bottom: 10px;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .success-popup {
          margin-top: 10px;
          padding: 10px;
          background-color: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
          border-radius: 5px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          padding: 5px 0;
          border-bottom: 1px solid #ccc;
        }
      `}</style>
    </div>
  );
}
