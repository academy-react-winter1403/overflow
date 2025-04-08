import React from 'react'
import aiImfg from "../../assets/landing/stateImg/ai.png";
import backImg from "../../assets/landing/stateImg/backend.png";
import frontImg from "../../assets/landing/stateImg/frontend.png";
import securityImg from "../../assets/landing/stateImg/security.png";
function CourseCategories() {
  return (
    <section className="flex content-center gap-8 ">
    <div className="border-black border-2 flex flex-col">
      <img src={aiImfg} alt="" />
      <h1> هوش مصنوعی </h1>
      <h4> توغبتاب</h4>
    </div>
  </section>
  )
}

export default CourseCategories