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
            menu: 'posts'
        }
    }

    handleMenu = (e) => {
        this.setState({
          current: e.key,
        })
    }

    render(){
        return(
            <div className="template">
                <div className="content">
                    <Switch>
                        <Route exact path="/posts" component={Posts} />
                        <Route path="/posts/:id" component={PostFullItem} />
                        <Redirect exact from="/" to="/posts" />
                    </Switch>
                </div>
            </div>
        )
    }
}