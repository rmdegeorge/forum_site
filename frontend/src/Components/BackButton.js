import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {withPosts} from '../providers/PostDataProvider';


class BackButton extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
        
    }
    


    render(){
    return (
        <div>
            <Button color="secondary" onClick={this.props.goBack}>Back</Button>
        </div>
    )}
}

export default withPosts(BackButton)