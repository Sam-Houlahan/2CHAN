import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import AddComment from './AddComment'
import Comments from './Comments'
const List = (props) =>{
return (
    <Router>
    <div className = "list">
       
        {props.list.map((item) => {
        
            return (
                <ul>
                <li>Title: {item.title}</li>
                <li>Message: {item.message} </li>
                <Comments comments={props.list.comments}/>
                <Route path = {`/comment/:title`} render={(routeProps) => <AddComment addComment = {props.addComment}{...routeProps}/>} />
                <Link to = {`/comment/${item.title}`}><li>Reply</li></Link>
                </ul>
        )
    })}
    </div>
    </Router>
    )

}
export default List
