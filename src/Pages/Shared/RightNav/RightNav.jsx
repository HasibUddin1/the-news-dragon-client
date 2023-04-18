import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mb-2'>Login With</h2>
            <div className='d-flex flex-column gap-3'>
                <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div>
                <h2 className='mt-2 mb-2'>Find Us On</h2>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <article
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className='text-center p-3'>
                        <h1 className='text-white pb-2'>Create an Amazing Newspaper</h1>
                        <p className='text-white pb-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='btn btn-danger'>Learn More</button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default RightNav;