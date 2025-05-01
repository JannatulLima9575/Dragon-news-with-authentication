import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightsAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin/>
            <FindUs/>
           <Qzone/>
        </div>
    );
};

export default RightsAside;