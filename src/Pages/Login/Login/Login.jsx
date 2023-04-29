import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const [error, setError ] = useState('')
    const [success, setSuccess] = useState('')

    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()

    const from = location.state?.from?.pathname || '/category/0'

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        setError('')
        setSuccess('')

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            setError('')
            setSuccess('User has successfully logged in')
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <Container className='w-25 mx-auto'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted">
                    New to This Site? <Link to='/register'>Please Register</Link>
                </Form.Text>
                {error && <h4 className='text-danger'>Error: {error}</h4>}
                {success && <h4 className='text-success'>{success}</h4>}
            </Form>
        </Container>
    );
};

export default Login;