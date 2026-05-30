'use client';

import React, { useState } from "react";

const CommentForm = ({ postId }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          name: authorName,
          email: authorEmail,
          content,
        }),
      });

      if (response.ok) {
        setAuthorName("");
        setAuthorEmail("");
        setContent("");
        setSuccessMessage("Comment submitted successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to submit comment.");
      }
    } catch (err) {
      setErrorMessage("Failed to submit comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Leave a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="authorName" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full p-2 bg-gray-900 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="authorEmail" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="authorEmail"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            required
            className="w-full p-2 bg-gray-900 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-300 mb-2">Comment</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-2 bg-gray-900 rounded-lg"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default CommentForm;
