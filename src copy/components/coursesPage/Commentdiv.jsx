import React, { useState, useEffect } from "react";
import { GetComment } from "../../core/services/api/GetCourses/Comment";
 

const Commentdiv = () => {

  const [comments, setComments] = useState([]);

    
    const fetchComments = async () => {

      const data = await GetComment();

      if (data) {

        console.log("datafromgetcommet :",data);
        setComments(data); 

      }
    };


  useEffect(() => {

    // fetchComments();

  }, []);

  return (
    <div className=' rounded-4xl bg-white w-5/10 h-[350px] mr-6'>
      <div className=' border-t-2 rounded-4xl border-sky-800 w--5/10'>
        <span className=' top-4 right-84 text-sky-800 font-bold text-2xl'>Comments:</span>
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