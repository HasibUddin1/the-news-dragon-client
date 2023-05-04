import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoryNewsCard from '../CatogoryNewsCard/CategoryNewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    useTitle('Categories')

    const {id} = useParams()

    const categoryNews = useLoaderData()


    return (
        <div>
            {id && <h1>This is Category: {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <CategoryNewsCard
                    key={news._id}
                    news={news}
                ></CategoryNewsCard>)
            }
        </div>
    );
};

export default Category;