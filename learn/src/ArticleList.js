import React from 'react';
import Article from './Article';

function ArticleList({articles}) {
    const articleElements = articles.map(article =>
        <p key={article.id}>
            <Article article={article} />
        </p>
    );
    return(
<div>
    {articleElements}
</div>)

}

export default ArticleList;