import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {withPosts} from '../providers/PostDataProvider'

const FormWrapper = styled.form`
    margin-top: 10px;
    text-align: center;
`

class NewTopic extends Component {
    constructor(){
        super()

        this.state = {
            name: "",
            redirect: false
        }
    }

    
    render() {

        const handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }

        const handleSubmit = e => {
            e.preventDefault()
            const post = {
                name: this.state.name
            }

            axios.post('http://192.168.1.37:8080/Topics', post).then(() => {
                this.setState({redirect: true})
                this.props.getTopics();
            })
        }

        if(this.state.redirect){
            return <Redirect to='/Topics' />
        }

        return (
            <div>
                <FormWrapper>

                    <TextField onChange={handleChange} type="text" id="outlined-basic" name="name" label="New Topic Name" variant="outlined" placeholder="Topic Name"/>
                    <Button component="button" onClick={handleSubmit} variant="contained">Post</Button>
                </FormWrapper>
            </div>
        );
    }
}

export default withPosts(NewTopic);
