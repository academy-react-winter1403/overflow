import { Field, Formik } from 'formik'
import React from 'react'
import { Form } from 'react-router'

const CommentSection = () => {
  return (
    <div className="absolute top-[980px] right-[-674px] w-[830px] h-[350px] bg-white rounded-2xl">
    <h5 className="absolute top-[30px] right-[100px] text-3xl font-bold text-sky-800">
      نظرات
    </h5>
    <Formik initialValues={{ feedback: '' }}>
      {() => (
        <Form>
          <div className="absolute top-[90px] right-[100px] w-[630px] h-[170px]">
            <Field
              as="textarea"
              name="feedback"
              className="w-full h-full border-2 rounded-2xl text-right p-2"
              placeholder="نظر خود را بنویسید..."
            />
          </div>
          <button
            type="submit"
            className="absolute top-[280px] right-[100px] border-2 rounded-2xl bg-sky-800 w-[147px] h-[52px] text-amber-50 leading-11"
          >
            ارسال نظر
          </button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export  {CommentSection}