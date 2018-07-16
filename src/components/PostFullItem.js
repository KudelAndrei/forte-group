import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

export default function PostFullItem(props) {
    const { posts = {} } = props;
    const { id = 1 } = props.match.params;
    const post = posts.find(_post => _post.id === Number(id));
    return(
        <div className="full-post">
        {
            post != undefined ?
            <React.Fragment>
                <Link to="/posts"><Icon type="arrow-left" /> Back</Link>
                <div className="full-post__wrap">
                    <h1>{post.title}</h1>
                    <p><Icon type="calendar" /> Дата публикации: {post.date}</p>
                    <p><Icon type="user" /> Автор: {post.author}</p>
                    <p>{post.description}</p>
                </div>
            </React.Fragment>
            :
            <h1>Пост не найден!</h1>
        }
        </div>
    )
}