import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {

    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='mt-2 mb-2'>Journalism Without Fear or Favour</p>
                <p className='mb-2'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in ea et dolorum saepe sint voluptatibus officiis perferendis soluta doloribus commodi, placeat sed. Voluptates fuga quis quam blanditiis pariatur eaque.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;