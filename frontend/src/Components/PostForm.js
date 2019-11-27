import React, {Component} from 'react'
import {withPosts} from '../providers/PostDataProvider'
import styled from 'styled-components'

const FormWrapper = styled.div`
    display: grid
    grid-template-columns: none
    
`

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            _id: ""
        }
    }

    componentDidMount(){
        this.props.getTopics();
    }

    render(){
        
        const mappedTopics = this.props.topics.map(topic => (
            <option value={topic._id}>{topic.name}</option>
        ))

        const handleChange = e => {
            this.setState({_id: e.target.value})
        }

        

        return (
            <FormWrapper>

                <form>

                    {/* Title, username, body, tags */}
                    <input type="text" name="postTitle" id="" placeholder="Title"/>
                    <input type="text" name="postUsername" placeholder="Username"/>
                    <select onChange={handleChange}>
                        {mappedTopics}
                    </select>
                    <textarea name="postBody" id="" cols="30" rows="10" placeholder="Content"></textarea>
                    <input type="text" name="postTags" id="" placeholder="tags"/>
                    <button>Post</button>

                </form>
                
            </FormWrapper>
        )
    }
}

export default withPosts(PostForm)