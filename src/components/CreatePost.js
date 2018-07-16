import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
const { TextArea } = Input;

export default class CreateReact extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.nextId,
            title: '',
            author: '',
            date: moment().format('DD.MM.YYYY'),
            description: ''
        }
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDate = (e) => {
        const date = moment(e).format('DD.MM.YYYY');
        this.setState({ date })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.handlePost(this.state);
    }

    render(){
        const { title, author, date, description } = this.state;
        return(
            <Form className="create-item" onSubmit={this.submitForm}>
                <h2 className="title">Add Post</h2>
                <Form.Item>
                    <Input value={title} onChange={this.onChangeInput} name="title" type="text" placeholder="Title" required />
                </Form.Item>
                <Form.Item>
                    <Input value={author} onChange={this.onChangeInput} name="author" type="text" placeholder="Author" required />
                </Form.Item>
                <Form.Item>
                    <DatePicker defaultValue={moment()} onChange={this.handleDate} format="DD.MM.YYYY" placeholder="Date" />
                </Form.Item>
                <Form.Item>
                    <TextArea value={description} onChange={this.onChangeInput} name="description" placeholder="Description" required autosize />
                </Form.Item>
                <div className="buttons">
                    <Button type="dashed" onClick={() => this.props.canclePost()}>Cancle</Button>
                    <Button type="primary" htmlType="submit">Add</Button>
                </div>
            </Form>
        )
    }
}