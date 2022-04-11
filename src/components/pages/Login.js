import React from 'react'
import '../stylecomponents/Login.css'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Input from './Input'

const Login = ({toggleL}) => {
  return (
    <div className='login'>
        <div className='loginIn'>
            <div className='loginhead'>
                <h3>Login</h3>
                <h4 className='cancel' onClick={toggleL}>x</h4>
            </div>
            <div className='loginbody'>
                <Button variant="contained" startIcon={<GoogleIcon />}>
                    Sign in with Goggle
                </Button>
                <Button variant="contained" startIcon={<FacebookIcon />}>
                    Sign in with Facebook
                </Button>
                <div className='logininput'>
                    <div className='email'>
                        <Input label='Email address' />
                        <p>we'll never share your email with anyone else</p>
                    </div>
                    <div className='password'>
                        <Input label='Password' />
                        <div className='checkbox'>
                            <input type='checkbox' />
                            Remember me
                        </div>
                    </div>
                </div>
                <div className='submitbtn'>
                    <Button variant="outlined">
                        Submit
                    </Button>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Login