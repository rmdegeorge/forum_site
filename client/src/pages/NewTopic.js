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
    display: flex;
    align-items: center;
    > :nth-child(1n) {
      height: 55px;
      margin: 0 10px 15px 0;
    };
`;

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

            axios.post('/Topics', post).then(() => {
                this.setState({redirect: true})
                this.props.getTopics();
            })
        }

        if(this.state.redirect){
            return <Redirect to='/TopicsPage' />
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
