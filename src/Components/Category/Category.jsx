import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoryPromise = fetch("/categories.json").then((res) =>
    res.json());
    const Category = () => {
        const Categories = use(CategoryPromise);


    return (
        <div>
            <h1 className='font-bold'>all CategoryNews({Categories.length})</h1>
        <div className='grid grid-cols-1 mt-5 gap-3'>
            {
                Categories.map(category => 
                    <NavLink key={category.id} className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent"} to={`/category/${category.id}`}>{category.name}</NavLink>
                )
            }
        </div>
        </div>
    );
};

export default Category;