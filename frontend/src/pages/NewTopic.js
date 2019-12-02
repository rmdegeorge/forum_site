import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

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
            }) 
        }
        
        if(this.state.redirect){
            return <Redirect to='/Topics' />
        } 

        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <input onChange={handleChange} type="text" name="name" id="" placeholder="Topic Name"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewTopic;