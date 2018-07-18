import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'antd';
import { delete_post } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function PostItem(props) {
    const { id, title, date, author, deletePost } = props;
    return(
        <Card title={<Link to={`/posts/${id}`}>{title}</Link>} extra={<Link to={`/posts/${id}`}>More</Link>} className="post-item">
            <div  className="post-item__wrap">
                <p><Icon type="user" /> {author}</p>
                <p><Icon type="calendar" /> {date}</p>
            </div>
            <Button className="post-item__delete" onClick={() => deletePost(id)} type="danger" ghost>Delete</Button>
        </Card>
    )
}


const mapActionsToProps = (reducer) => {
    return {
        deletePost: bindActionCreators(delete_post, reducer)
    }
}

export default connect(null, mapActionsToProps)(PostItem);