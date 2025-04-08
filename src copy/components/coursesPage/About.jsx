import React from 'react'

const About = ({data}) => {

  const courseData = data || {};
  console.log("desc:",courseData.describe)

  return (
    
<div className="flex flex-col gap-[30px] items-start mt-11 w-9/10 h-150 rounded-2xl bg-white p-10">
  <h1 className="text-sky-800 font-bold text-3xl self-end">توضیحات</h1>

  <p className="text-right w-full leading-7">{courseData.describe}</p>
  <p className="text-right w-full leading-7">{courseData.describe}</p>
  <p className="text-right w-full leading-7">{courseData.describe}</p>

</div>
  )
}

export  {About}