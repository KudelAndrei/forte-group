import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import PostItem from './PostItem';
import CreatePost from './CreatePost';

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            openCreateForm: false
        }
    }

    handleCreateForm = () => {
        this.setState({ openCreateForm: !this.state.openCreateForm })
    }

    render(){
        const { posts, addPost, deletePost } = this.props;
        const lastId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 0;
        return(
            <div className="posts">
                <div className="left">
                    {
                        this.state.openCreateForm ?
                        <CreatePost nextId={lastId} handlePost={addPost} canclePost={() => this.handleCreateForm()} />
                        :
                        <Button onClick={this.handleCreateForm}><Icon type="file-add" /> New post</Button>
                    }
                </div>
                <div className="right">
                    <h2>Posts ({posts.length})</h2>
                    <div className="container">
                        {
                            posts.length > 0 ? posts.map(post => {
                                return(
                                    <PostItem onDeletePost={deletePost} key={post.id} {...post} />
                                )
                            })
                            :
                            <p>Not data</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
} 