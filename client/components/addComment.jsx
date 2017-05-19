
import React from 'react'

function addComment (props) {
    console.log(props)
    return(
        <div>
            <p> comment on {props.match.params.title}</p>
        </div>


    )
}
export default addComment