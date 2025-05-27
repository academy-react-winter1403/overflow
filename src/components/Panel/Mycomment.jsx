import { useState, useEffect } from "react";
import { Mycomment } from "../../core/services/api/userpanelapi/panelapis";

const Mysetcomment = () => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMycomment = async () => {
    try {
      const response = await Mycomment();

      setComment(response.myCommentsDtos);
    } catch (err) {
      console.error('Error fetching comment:', err);
      setError('Failed to load comments.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMycomment();
  }, []);

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto m-auto mt-10 dark:bg-gray-500">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 space-y-4 dark:bg-gray-400">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-4 ">نظرات من </h2>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : comment ? (
          typeof comment === 'string' ? (
            <p className="text-gray-800">{comment}</p>
          ) : Array.isArray(comment) ? (
            comment.length > 0 ? (
              comment.map((c, index) => (
                <p key={index} className="text-gray-800 mb-2">{c}</p>
              ))
            ) : (
              <div className="text-center text-gray-500">No comment</div>
            )
          ) : (
            <pre className="text-gray-700">{JSON.stringify(comment, null, 2)}</pre>
          )
        ) : (
          <div className="text-center text-gray-500">No comment</div>
        )}
      </div>
    </div>
  );
};

export { Mysetcomment };