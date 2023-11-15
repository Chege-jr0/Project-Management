import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class SignIn extends Component {
    state = {
     email: '',
     password:''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    handleChange = (e) =>{
        this.setState({
          [e.target.id]: e.target.value
        })
    }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='signin'/>

    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className='grey-text text-darken-3'>Sign In</h5>
            <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' onChange={this.handleChange}></input>
            </div>
            <div className='input-field'>
                <button className='btn pink lighten-1 z-depth-0'>Sign In</button>
            </div>
            <div className='red-text center'>
               { authError ?<p>{authError}</p> : null}
            </div>
        </form>
      </div>
    )
  }
}
 const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebasa.auth
  }
 }

const mapDispatchToProps = (dispatch) =>{
   return {
    SignIn: (creds) => dispatch(signIn(creds))
   }
}

export default connect(mapDispatchToProps, mapStateToProps)(SignIn)