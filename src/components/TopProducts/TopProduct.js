import React from 'react';

const TopProduct = ({ pd }) => {

    const { title, img, price } = pd;

    return (
        <div class="shadow-md py-2 ">
            <img class="px-3 my-2 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center"  layout="responsive"  height={1080} style={{height:'400px'}}
                width={1920} src={img} alt="Sunset in the mountains" />
            <div class="flex justify-between font-semibold text-green-900  text-xl px-3 py-2">
                <h4>{title}</h4>
                <h4 class="">${price}</h4>
            </div>
            <div class="px-3 py-2">
            <button class="shadow-lg text-yellow-500 hover:bg-yellow-500 hover:text-green-900 bg-green-900 font-semibold py-2 px-6">Add To Cart</button>
            </div>            
        </div>
    );
};

export default TopProduct;