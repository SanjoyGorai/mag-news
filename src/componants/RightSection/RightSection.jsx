import React from 'react'
import './RightSection.scss'
import SectionHeading from './SectionHeading/SectionHeading'
import SectionLinks from './SectionLinks/SectionLinks'

const RightSection = (props) => {
    return (
        <>
            <SectionHeading title={props.title} />
            <SectionLinks />
        </>
    )
}

export default RightSection