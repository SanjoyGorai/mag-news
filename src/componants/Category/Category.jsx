import React from 'react'
import './Category.css'
import post5 from '../../assets/images/post-05.jpg'
import CategoryNav from './CategoryNav/CategoryNav'
import PostItem from './PostItem/PostItem'

const Category = () => {
    return (
        <>
            <CategoryNav />
            <PostItem />
        </>
    )
}

const name = "Sanjoy";

export { Category, name }