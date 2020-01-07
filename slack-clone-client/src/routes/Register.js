import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {gql} from 'apollo-boost'
import { ApolloProvider, useMutation } from '@apollo/react-hooks';

class Register extends React.Component{
  
  state = {
    username:'',
    email:'',
    password:''
  };

  onChange = e =>{
    const {name, value} = e.target;
    this.setState({[name]:value});
  };

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    })
    console.log(response)
  };

  render(){
    const {username, email, password} = this.state;
    return(
    <div class = "ui container">
      <h1 class="ui header">Register</h1>
      <div class="ui fluid icon input">
      <input type="text" name = "username" onChange ={this.onChange} value = {username} placeholder="Username"/>
      </div>
      <div class="ui fluid icon input">
      <input type="email" name = "email" onChange ={this.onChange} placeholder="Email"/>
      </div>
      <div class="ui fluid icon input">
      <input type="password" name = "password" onChange ={this.onChange} placeholder="Password"/>
      </div>
      <button class="ui button" onClick = {this.onSubmit}>
      submit
      </button>
      </div>
    
    );
  }
}

// var REGISTER = gql`
//   mutation($username:String!, $email:String!, $password:String!){
//     register(username:$username, email:$email, password:$password)
//   }

export default Register
