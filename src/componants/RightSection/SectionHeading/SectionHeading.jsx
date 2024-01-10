import React from 'react'
import './SectionHeading.css'

const SectionHeading = (props) => {
  return (
    <>
      <h3 className='heading'>{props.title} </h3>
    </>
  )
}

export default SectionHeading