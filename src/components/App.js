import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import Posts from './Posts';
import PostFullItem from './PostFullItem';

import data from '../data/posts.json';

import 'antd/dist/antd.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: data.posts,
            menu: 'posts'
        }
    }

    handleMenu = (e) => {
        this.setState({
          current: e.key,
        })
    }

    addPost = (newPost) => {
        this.setState({
            posts: [...this.state.posts, {...newPost}]
        })
    }

    deletePost = (id) => {
        const posts = this.state.posts.filter(post => post.id !== id);
        this.setState({ posts });
    }

    render(){
        const { posts = [] } = this.state;
        return(
            <div className="template">
                <div className="content">
                    <Switch>
                        <Route exact path="/posts" component={(props) => <Posts deletePost={this.deletePost} addPost={this.addPost} {...props} posts={posts}  />} />
                        <Route path="/posts/:id" component={(props) => <PostFullItem {...props} posts={posts} />} />
                        <Redirect exact from="/" to="/posts" />
                    </Switch>
                </div>
            </div>
        )
    }
}