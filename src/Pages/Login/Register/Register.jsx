import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('Register')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    const handleEmail = event => {
        const emailField = event.target.value
        setEmail(emailField)
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailField)) {
            setEmailError('Please enter a valid Email Address')
        }
        else {
            setEmailError('')
        }
    }

    const handlePassword = event => {
        const passwordField = event.target.value
        setPassword(passwordField)
        if (!/(?=.*[a-z])/.test(passwordField)) {
            setPasswordError('Password must contain at least one lowercase letter')
        }
        else if (!/(?=.*[A-Z])/.test(passwordField)) {
            setPasswordError('Password must contain at least one uppercase letter')
        }
        else if (passwordField.length < 8) {
            setPasswordError('Password must be 8 characters long')
        }
        else {
            setPasswordError('')
        }
    }

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        setError('')
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const registeredUser = result.user
                console.log(registeredUser)
                setError('')
                setSuccess('User has been successfully created')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmail} name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Text className="text-muted">
                    <h4 className='text-danger'>{emailError}</h4>
                </Form.Text>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handlePassword} name='password' placeholder="Password" />
                </Form.Group>
                <Form.Text className="text-muted">
                    <h4 className='text-danger'>{passwordError}</h4>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted">
                    Already Have an Account? <Link to='/login'>Please Login</Link>
                </Form.Text>
                {error && <h4 className='text-danger'>Error: {error}</h4>}
                {success && <h4 className='text-danger'>{success}</h4>}
            </Form>
        </Container>
    );
};

export default Register;