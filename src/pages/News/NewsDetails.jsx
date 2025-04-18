import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";

const NewsDetails = () => {
  const [newsData, setNewsData] = useState();
  const { id } = useParams(); // Get the news ID from URL
  const URL = `/News/${id}`;

  useEffect(() => {
    const getNewsDetails = async () => {
      const response = await getApi(URL, "detailsNewsDto");
      console.log(response);
      setNewsData(response);
    };

    getNewsDetails();
  }, [id]);

  // Sample news data (you can replace this with dynamic data)
  const news = {
    title: "How To Become Ridiculously Self-Aware In 20 Minutes",
    date: "July 20, 2024",
    content:
      "Here’s a quick overview of how you can improve self-awareness in just 20 minutes. We dive into some techniques and exercises that are scientifically proven to boost mindfulness and personal clarity.",
    author: "Jessica Rose",
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{news.title}</h1>
        <div className="text-lg text-gray-600">
          {news.date} | {news.author}
        </div>
      </header>

      <div className="mb-6">
        <img
          src="path_to_your_image.jpg"
          alt="news cover"
          className="w-full h-80 object-cover rounded-xl shadow-lg mb-4"
        />
        <p className="text-lg text-gray-700">{news.content}</p>
      </div>

      <div className="space-y-4">
        <section>
          <h3 className="text-xl font-semibold text-gray-800">Related Posts</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <img
                src="path_to_related_image.jpg"
                alt="Related post"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <p className="text-md font-medium text-gray-800">
                  Make Your Own Expanding
                </p>
                <p className="text-sm text-gray-500">July 20, 2024</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800">
            Leave a Comment
          </h3>
          <form className="space-y-4 mt-4">
            <textarea
              placeholder="Your comment"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Post Comment
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default NewsDetails;
