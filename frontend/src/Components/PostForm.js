import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {withPosts} from '../providers/PostDataProvider'
import axios from 'axios'
import styled from 'styled-components'

const FormWrapper = styled.div`
        text-align: center
    
`

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            username: "",
            body: "",
            tags: [],
            _id: ""
        }
    }

    componentDidMount(){
        this.props.getTopics();
    }

    render(){
        
        const mappedTopics = this.props.topics.map(topic => (
            <option name="_id" value={topic._id}>{topic.name}</option>
        ))

        const handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }
        
        const handleSubmit = e => {
            e.preventDefault();
            const post = {
                title: this.state.title,
                tags: this.state.tags,
                topic: this.state._id,
                body: this.state.body,
                username: this.state.username
            }
            axios.post('http://192.168.1.37:8080/posts/' + this.state._id, post).then(response => {
                return <Redirect to={`/post/` + response.data._id}/>
            })
        }

        return (
            <div>

                <FormWrapper>
                    <form onSubmit={handleSubmit}>

                        {/* Title, username, body, tags */}
                        <input onChange={handleChange} type="text" name="title" id="" placeholder="Title"/>
                        <input onChange={handleChange} type="text" name="username" placeholder="Username"/>
                        <select onChange={handleChange} name="_id">
                            {mappedTopics}
                        </select>
                        <textarea onChange={handleChange} name="body" id="" cols="30" rows="10" placeholder="Content"></textarea>
                        <input onChange={handleChange} type="text" name="tags" id="" placeholder="tags"/>
                        <button>Post</button>

                    </form>
                </FormWrapper>
                
            </div>
        )   
    }
}

export default withPosts(PostForm)