import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {withPosts} from '../providers/PostDataProvider'

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import axios from 'axios'
import styled from 'styled-components'

const FormWrapper = styled.form`
    display: grid;
    row-gap: 10px;
    justify-content: center;
    
`

const SelectBox = styled(TextField)`
    width: 225px;
`

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: "",
            username: "",
            body: "",
            tags: [],
            _id: "",
            redirect: false,
            postid:''
        }
    }

    componentDidMount(){
        this.props.getTopics();
    }
    
    render(){
        
        const mappedTopics = this.props.topics.map(topic => (
            <MenuItem value={topic._id}>{topic.name}</MenuItem>
        ))

        const handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }
        
        const handleSubmit = e => {
            e.preventDefault();
            // this.setState(prevState => {tags: prevState.tags.split(", ")})

            const post = {
                title: this.state.title,
                tags: this.state.tags.split(", "),
                topic: this.state._id,
                body: this.state.body,
                username: this.state.username,
                votes: 0           
            }

            console.log(this.state.tags)

            axios.post('http://192.168.1.37:8080/posts/' + this.state._id, post).then(response => {
                this.setState({postid: response.data._id})
                this.setState({redirect: true})
            })
        }

        if(this.state.redirect){
            return <Redirect to={`/Posts/` + this.state.postid}/>
        }


        return (    
            <div>

                
                    <FormWrapper>

                        {/* Title, username, body, tags */}
                        <TextField onChange={handleChange} type="text" name="title" id="outlined-basic" variant="outlined" placeholder="Title"/>
                        <TextField onChange={handleChange} type="text" name="username" id="outlined-basic" variant="outlined" placeholder="Username"/>
                        <SelectBox defaultValue=""  id="outlined-select-currency" select name="_id" label="Select A Topic" onChange={handleChange} margin="normal" variant="outlined">
                            {mappedTopics}
                        </SelectBox>
                        <TextField onChange={handleChange} name="body" id="outlined-textarea" placeholder="Content" multiline margin="normal" variant="outlined" />
                        <TextField onChange={handleChange} type="text" name="tags" id="outlined-basic" variant="outlined" placeholder="tags"/>
                        <Button component="button" onClick={handleSubmit} variant="contained">Post</Button>

                    </FormWrapper>

                
            </div>
        )   
    }
}

export default withPosts(PostForm)