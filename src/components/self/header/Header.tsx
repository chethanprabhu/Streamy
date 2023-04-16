import React from "react"

import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import "./header.scss"

const CustomisedTheaterComedyIcon = () => {
    return <TheaterComedyIcon className='header__comedyIcon' fontSize="large"/>
}

const Header = () => {
    return (
        <span className='header'> 
            <CustomisedTheaterComedyIcon /> Streamy <CustomisedTheaterComedyIcon /> 
        </span>
    )
}

export default Header;