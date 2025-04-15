import React, { useState, useEffect } from "react";
import { GetComment } from "../../core/services/api/GetCourses/Comment";
import Like from '../../assets/Coursesimage/like.png'
import disLike from '../../assets/Coursesimage/dislike.png'

const Commentdiv = ({ courseId }) => {

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setid] = useState(courseId);

  const fetchComments = async () => {
    if (!id) {
      console.error("Course ID is missing.");
      setError("Invalid course ID.");
      return;
    }

    setIsLoading(true); 
    setError(null); 

    try {
      const fetchedData = await GetComment(id); 
      if (fetchedData) {
        console.log("Fetched comments:", fetchedData);
        setComments(fetchedData);
      } else {
        console.log("No comments fetched.");
        setComments([]);
      }
    } catch (err) {
      console.error("Error fetching comments:", err.message || err);
      setError("Failed to load comments.");
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchComments(); 
  }, [id]);

  return (
    <div className="rounded-4xl bg-white w-7/11 h-88">
      <div className="border-t-2 rounded-4xl border-deep-blue">
        <span className="top-4 right-84 text-deep-blue font-bold text-2xl">Comments:</span>
        <div className=" overflow-y-auto h-80 flex flex-col gap-5">
          {isLoading ? (
            <p className="text-gray-600">Loading comments...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : comments.length > 0 ? (
            comments.map((comment, index) => (
              
                                        // comment div
              <div className="pl-2 h-80 text-right flex flex-row items-end justify-end border-b-2 border-gray-300">

                <div className=" flex flex-col w-2/10  gap-20 -3 h-full  -sky-800">

                  <div className="-2 -amber-600 flex flex-row w-10/10">
                    {comment.insertDate}
                  </div>

                  <div className="flex flex-row -2 -purple-600 gap-5 pb-5">
                                      
                    <div className="text-2xl flex flex-row items-center justify-center w-3/10 bg-gray-300 rounded-3xl">
                      <img src={Like} />
                      <p>{comment.likeCount}</p>
                    </div>

                    <div className="text-2xl flex flex-row items-center justify-center bg-gray-300 rounded-3xl w-3/10">
                      <img src={disLike} />
                      <p>{comment.disslikeCount}</p>
                    </div>
                  </div>

                </div>

                <div className="flex flex-col w-8/10 justify-end h-full gap-2">

                  <p className="-red-700 pr-5 text-2xl font-bold">
                    {comment.title}
                  </p>
                  <p className="flex flex-row justify-end pr-5 text-2xl">
                      {comment.author}  
                  </p>

                  <p key={index} className=" text-gray-600 h-20 pr-5 pt-3 text-right ">
                    {comment.describe}
                  </p>

                </div>

                <div className="w-1/10 -2 justify-center flex flex-col h-10/10 ">
                  <img className="w-10/10 h-7/10 rounded-[50px] " src={comment.pictureAddress} />
                  <div className="h-4/10 -b-emerald-400 "></div>
                </div>

                
              </div>

            ))
          ) : (
            <p className="text-gray-600">No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Commentdiv };