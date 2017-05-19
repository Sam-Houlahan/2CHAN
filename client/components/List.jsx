import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import addComment from './addComment'
const List = (props) =>{
console.log('props.list:', props)
return (
    <Router>
    <div>
        {props.list.map((item) => {
            return (
                <ul>
                <li>Title: {item.title}</li>
                <li>Message: {item.message} </li>
                <Route path = {`/comment/:title`} component ={addComment} />
                <Link to = {`/comment/${item.title}`}><li>Reply</li></Link>
                </ul>
        )
    })}
    </div>
    </Router>
    )

}
export default List
