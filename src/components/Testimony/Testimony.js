import React from 'react';
import TestimonyGiven from './TestimonyGiven';
import rm from '../../images/rm.jpg'
import jin from '../../images/jin.jpg'
import kook from '../../images/kook.jpg'
const Testimony = () => {

    const testimony = [
        {
            id: 1,
            name: 'Rap Monster',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            img: rm,
            occupation: 'singer'
        },
        {
            id: 2,
            name: 'Kim Seok-jin',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            img: jin,
            occupation: 'singer'
        },
        {
            id: 3,
            name: 'Jeon Jung-kook',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
            img: kook,
            occupation: 'singer'
        }
    ]
    return (
    <div>
            <div className='container p-5' id='testimony'>
         <div className="text-5xl leading-4 font-extrabold text-yellow-500 mx-8 py-8 flex items-center justify-center">
        <h2 className='py-3 px-5 pl-3'>Testimony</h2>
        </div>
        <div className='flex align-middle justify-around flex-wrap px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                testimony.map(tm => <TestimonyGiven key={tm.id} tm={tm} />)
            }
        </div>
    </div>
    </div>
    );
};

export default Testimony;