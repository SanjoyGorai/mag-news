import React from 'react'
import './Headline.scss'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';

const Headline = () => {
    return (
        <>
            <div className="headline-container">
                <div>
                    <span className='uppercase'>Trending Now:</span>
                    <span>
                        <span>Microsoft quisque at ipsum vel orci eleifend ultrices</span>
                        {/* <span>Designer fashion show kicks off Variety Week</span> */}
                    </span>
                </div>
                <div className='search-bar'>
                    <input type="text" name="search" id="" placeholder='Search' className='search-input' />
                    <button>
                        {/* <Button color='success'> Search</Button> */}
                        <SearchIcon className='hover:text-green-500 searchIcon'/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Headline