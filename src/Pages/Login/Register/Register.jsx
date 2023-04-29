import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {createUser} = useContext(AuthContext)

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
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
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