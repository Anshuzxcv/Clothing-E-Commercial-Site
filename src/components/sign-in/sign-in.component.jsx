import React from 'react';

import './sign-in.styles.scss';
import InputForm from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.jtilis';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ name: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account</h2>
        <span>Sign in with Your Email and Password</span>

        <form onClick={this.handleSubmit}>
          <InputForm
            type='email'
            name='email'
            label='email'
            onChange={this.handleChange}
            value={this.state.email}
            required
          />

          <InputForm
            type='password'
            name='password'
            label='password'
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
