import React, { useState, useEffect } from "react"
import axios from "axios"

const Trending = () => {

    const [state, setState] = useState([])

    const fetchTrending = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY_V3}`)
        console.log(state)
        setState(data.results);
    }

    useEffect(() => {
        fetchTrending()
    }, [])

    return (
        <div>
           
        </div>
    )
}

export default Trending;