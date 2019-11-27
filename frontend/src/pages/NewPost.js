import React, { Component } from 'react';
import BackButton from '../Components/BackButton'

import PostForm from '../Components/PostForm'

class NewPost extends Component {
    render() {
        return (
            <div>
                <BackButton goBack={this.props.history.goBack}/>
                <PostForm />
            </div>
        );
    }
}

export default NewPost;