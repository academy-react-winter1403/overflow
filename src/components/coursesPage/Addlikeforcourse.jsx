import like from '../../assets/Coursesimage/like.png';
import dislike from '../../assets/Coursesimage/dislike.png';

const Addlikeforcourse = () => {
  return (
    <div className="pt-15 pb-15 border-t-2 border-b-2 border-deep-blue flex flex-row-reverse text-3xl font-bold font-kalameh gap-5">
       آیا از دوره راضی بودید

        <div className=' flex flex-row gap-2'>
            <img src={like}/>
            <img src={dislike}/>
        </div>
    </div>
  )
}

export  {Addlikeforcourse}