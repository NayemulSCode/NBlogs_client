import React from 'react'
import { useHistory } from 'react-router-dom';
import { login } from '../PrivateRouting/util';
import Navbar from '../Shared/Navbar';

const Login = (props) => {
    const history = useHistory();
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;
        login();
        if(email=== 'test@test.com' && password==='#2021dev'){
            history.push('/dashboard')
        }
        console.log(email, password);
    };

    const classes = {
        pageBody: 'h-screen flex bg-gray-bg1',
        formContainer:
            'w-full max-w-md    m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16',
        formHeading: 'text-2xl  font-medium text-primary mt-4 mb-12 text-center',
        btnContainer: 'flex justify-center items-center mt-6',
    };
    return (
        <div>
            <Navbar />
        
        <div className={classes.pageBody}>
            <div className={classes.formContainer}>
                <h1 className={classes.formHeading}>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <input
                        id='email'
                        label='Email'
                        type='email'
                        placeholder='Your email'
                    />
                    <small>test admin email: test@test.com</small>
                    <input
                        id='password'
                        label='Password'
                        type='password'
                        placeholder='Your Password'
                    />
                    <small>test admin pass: #2021dev</small>
                    <div className={classes.btnContainer}>
                        <button type='submit'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Login
