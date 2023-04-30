import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-news-dragon-server-iconicluck.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>All Category</h2>
            <div className='d-flex flex-column gap-3 ps-4'>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'
                        key={category.id}
                    >{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftNav;