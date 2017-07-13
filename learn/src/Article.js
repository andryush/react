import React, {Component} from 'react';
import CommentsList from "./CommentsList";


class Article extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    getBody() {
        if(!this.state.isOpen) return null;
        return <p>{this.props.article.text}</p>
    }

    handleClick = () => this.setState({
        isOpen: !this.state.isOpen
    })

    render() {
        const {article} = this.props
        return (
            <div>
                <h1 onClick={this.handleClick}>{article.title}</h1>
                <CommentsList comments={article.comments} />
                {this.getBody()}


            </div>
        )
    }
}

export default Article;