import React from 'react'
import image from '../../assets/images/post-01.jpg'

const Home = () => {
    return (
        <>
            <h1>Business Microsoft quisque at ipsum vel orci eleifend ultrices</h1>
            <img src={image} alt="" className='w-96' />
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-dark">Dark</button>

            <button type="button" class="btn btn-link">Link</button>
        </>
    )
}

export default Home