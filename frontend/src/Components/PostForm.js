import React, {Component} from 'react'
import {withPosts} from '../providers/PostDataProvider'
import styled from 'styled-components'

class PostForm extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return (
            <div>

                <form>

                    {/* Title, username, body, tags */}
                    <input type="text" name="postTitle" id="" placeholder="Title"/>
                    <input type="text" name="postUsername" placeholder="Username"/>
                    <textarea name="postBody" id="" cols="30" rows="10" placeholder="Content"></textarea>
                    <input type="text" name="postTags" id="" placeholder="tags"/>
                    <button>Post</button>

                </form>
                
            </div>
        )
    }
}

export default withPosts(PostForm)