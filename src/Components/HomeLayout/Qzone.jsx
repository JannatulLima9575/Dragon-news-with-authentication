import React from 'react';
import swimingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playImage from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>Q-Zone</h2>

            <div className='space-y-4 place-items-center'>
                <img src={swimingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;