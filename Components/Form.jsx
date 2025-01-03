import { useState } from 'react';

export default function CommentSection() {
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Backend me bhejne ka logic yahan add karen (optional)
    setSuccessMessage('Comment added successfully!');
    setComment('');
    setTimeout(() => setSuccessMessage(''), 3000); // Success message ko 3 seconds ke baad hata dein
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
      {successMessage && (
        <div className="success-popup">
          {successMessage}
        </div>
      )}
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
      `}</style>
    </div>
  );
}
