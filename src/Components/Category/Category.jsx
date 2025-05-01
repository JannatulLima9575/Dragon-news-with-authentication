import React, { use } from 'react';
const CategoryPromise = fetch("/categories.json").then((res) =>
    res.json());
    const Category = () => {
        const Categories = use(CategoryPromise);


    return (
        <div>
            <h1 className='font-bold'>all CategoryNews({Categories.length})</h1>
        </div>
    );
};

export default Category;