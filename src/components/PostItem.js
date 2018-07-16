import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'antd';

export default function PostItem(props) {
    const { id, title, date, author, onDeletePost } = props;
    return(
        <Card title={<Link to={`/posts/${id}`}>{title}</Link>} extra={<Link to={`/posts/${id}`}>More</Link>} className="post-item">
            <div  className="post-item__wrap">
                <p><Icon type="user" /> {author}</p>
                <p><Icon type="calendar" /> {date}</p>
            </div>
            <Button className="post-item__delete" onClick={() => onDeletePost(id)} type="danger" ghost>Delete</Button>
        </Card>
    )
}