import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const CategoryNewsCard = ({ news }) => {

    const { _id, title, details, image_url, author, total_view, rating } = news

    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <div className='d-flex gap-2 align-items-center flex-grow-1'>
                    <Image style={{ height: '40px', width: '40px' }} src={author.img} roundedCircle />
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p className='mb-0'><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="bottom" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ?
                            <>{details}</> :
                            <>{details.slice(0, 250)}....... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='d-flex align-items-center gap-2 flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    ></Rating>
                    <p className='mb-0'>{rating?.number}</p>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <FaEye></FaEye>
                    <p className='mb-0'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CategoryNewsCard;