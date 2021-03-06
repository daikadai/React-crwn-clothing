import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email,password)
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name] : value })
  }
  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" handleChange={this.handleChange}  value={this.state.email} label="email" required/>
          <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password} label="password" required/>
          <div className="buttons">
            <CustomButton type="submit" > Sign In </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps )(SignIn)
