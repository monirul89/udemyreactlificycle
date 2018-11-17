import React from 'react';
import { Link } from 'react-router-dom';
const Profiles = (props)=>{
    console.log(props)
    return(
        <div>
            <Link to={{
                pathname:'/posts'
            }}>take me to /profile/post</Link>
        </div>
    )
}

export default Profiles;