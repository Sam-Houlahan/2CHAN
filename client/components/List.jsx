import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import AddComment from './AddComment'
import Comments from './Comments'
const List = (props) =>{
return (
    <Router>
    <div className = "list-item">

        {props.list.map((item) => {

            return (
                <div className="item">
                <h2 className="title">{item.title}</h2>
                <div className="message"><b>Message:</b><br /> <p>{item.message}</p> </div>
                <div className="comments">
                <Comments comments={props.list.comments}/>
                <Route path = {`/comment/:title`} render={(routeProps) => <AddComment addComment = {props.addComment}{...routeProps}/>} />
                <Link to = {`/comment/${item.title}`}><hr /><button>Reply</button></Link>
                </div>
                </div>
        )
    })}
    </div>
    </Router>
    )

}
export default List
