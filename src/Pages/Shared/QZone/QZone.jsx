import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'


const QZone = () => {
    return (
        <div>
            <div className='bg-secondary text-center py-4 my-4'>
                <h2 className='mb-2'>Q-Zone</h2>
                <img className='mb-2' src={qzone1} alt="" />
                <img className='mb-2' src={qzone2} alt="" />
                <img className='mb-2' src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;