import React from 'react'
import Comments from './Comments'

function CommentsList({ comments }) {

    return (
            comments.map(comment =>
            <Comments key={comment.id} user = {comment.user} text = {comment.text} />)
    )
}

export default CommentsList