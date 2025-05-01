import React, { Suspense } from 'react';
import Category from '../Category/Category';

const LeftAside = () => {
    return (
        <div>
         <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Category/>
         </Suspense>
        </div>
    );
};

export default LeftAside;