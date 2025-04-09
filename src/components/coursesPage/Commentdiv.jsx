import React, { useState, useEffect } from "react";
import { GetComment } from "../../core/services/api/GetCourses/Comment";
 

const Commentdiv = ({data}) => {

  const courseData = data || {};


  const [comments, setComments] = useState([]);

    
    const fetchComments = async () => {

      const data = await GetComment();

      if (data) {

        console.log("datafromgetcommet :",data);
        setComments(data); 

        console.log("courseData from get comment :", courseData);
      }
    };


  useEffect(() => {

    // fetchComments();

  }, []);

  return (
    <div className=' rounded-4xl bg-white w-5/10 h-88 mr-9'>
      <div className=' border-t-2 rounded-4xl border-depp-blue w--5/10'>
        <span className=' top-4 right-84 text-deep-blue font-bold text-2xl'>Comments:</span>
        <div className=' top-16 px-4 overflow-y-auto h-[300px]'>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <p key={index} className='text-gray-600'>
                {comment}
              </p>
            ))
          ) : (
            <p className='text-gray-600'>No comments available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export { Commentdiv };