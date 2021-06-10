import React from 'react';
import { GiFlowerHat } from 'react-icons/gi';
const TestimonyGiven = ({ tm }) => {
    const { name, img, description, occupation } = tm;
    return (
        <div class="shadow-md py-2 my-3 mx-5 text-yellow-500">
            <GiFlowerHat color='#E2AA70' size='4em'/>
            <p className="text-xl px-2 py-2 text-justify">{description}</p>          
            <div class="flex justify-between font-semibold text-yellow-500  text-xl px-3 py-2">
                <div class="md:flex rounded-lg p-6">
                    <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={img} alt={img} />
                    <div class="text-center md:text-left">
                        <h2 class="text-lg">{name}</h2>
                        <div class="text-purple-500">{occupation}</div>
                    </div>
                </div>
            </div>
        </div>
    ); 
};

export default TestimonyGiven;