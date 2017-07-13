import React, {Component} from 'react'

const Comments = (props) =>
<li>
    <h3>{props.user}</h3>
    <p>{props.text}</p>
</li>


export default Comments;