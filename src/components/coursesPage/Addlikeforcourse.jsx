import Like from '../../assets/Coursesimage/like.png';
import Dislike from '../../assets/Coursesimage/dislike.png';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';
import { Addlikecourse } from '../../core/services/api/GetCourses/Comment';

const Addlikeforcourse = ({data}) => {
    console.log("courseid:::::::::;",data)
    const [rating, setRating] = useState(0) 
    const [like, setlike] = useState([]) 
    const [dislike, setdislike] = useState([]) 

    const likecourse = async () => {

        const respone = await Addlikecourse(data);

        console.log('like respone :',respone)
        setlike(respone);
    }    
    
    const dislikecourse = async () => {

        const respone = await Addlikecourse(data);

        setdislike(respone);
    }


    useEffect(() => {
        likecourse();
        dislikecourse();
    }, [])
    
  return (
    <div className="bg-white flex flex-row-reverse text-3xl font-bold font-kalameh gap-95 items-center w-7/14 rounded-2xl h-20 pr-5 dark:bg-gray-700 max-lg:w-10/10 transition-all duration-300 ">

        <div className='flex flex-row-reverse gap-5 items-center' >
            <p>امتیاز</p>
            <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>

        <div className=' flex flex-row gap-5 '>

            <div className=' flex flex-row text-2xl items-center '>
                <img className='w-10 h-10 ' src={Like}/>
                <button
                onSubmit={() => likecourse}></button>
            </div>
            <div className='flex flex-row items-center text-2xl'>
                <img  className='w-10 h-10 '  src={Dislike}/>
                <button onSubmit={() => dislikecourse}></button>
            </div>

        </div>
    </div>

    
  )
}

export  {Addlikeforcourse}