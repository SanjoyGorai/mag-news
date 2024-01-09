import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <>
            <div className='subs-container'>
                <h5 className='font-bold sub-title' >Subscribe</h5>
                <p className='sub-para'>Get all latest content delivered to your email a few times a month.</p>
                <form action="">
                    <input type="text" name='email' placeholder='Email' className='input' />
                    <button><i className="fa fa-arrow-right"></i></button>
                </form>
            </div>
        </>
    )
}

export default Subscribe