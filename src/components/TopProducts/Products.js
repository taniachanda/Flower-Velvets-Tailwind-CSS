  
import React from 'react';
// import bitcoin from '../img/bitcoin.jpg';
// import land from '../img/land.jpg';
// import walton from '../img/walton.jpg';
// import iphone from '../img/iphone.jpeg';
import TopProduct from "./TopProduct";

const topProducts = [
    {
        id: 1,
        title: "HEART'S DESIRE",
        img: "https://images.unsplash.com/photo-1577847497046-2e2383a59698?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 19
    },
    {
        id: 2,
        title: 'ASSORTED ROSES',
        img: "https://images.unsplash.com/photo-1611697703419-4611cd3d35c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 15
    },
    {
        id: 3,
        title: 'ROPICAL PEACE LILY',
        img: "https://images.unsplash.com/photo-1502089418555-ebcba08cb377?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 17
    },
    {
        id: 4,
        title: 'ROSES SURPRISE',
        img:"https://images.unsplash.com/photo-1596084467303-42ae46b9a64a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 17
    },
    {
        id: 5,
        title: 'PREMIUM JOYFUL',
        img: "https://images.unsplash.com/photo-1584213189951-a92532ddad9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI2fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 19
    },
    {
        id: 6,
        title: 'ROSES SURPRISE',
        img: "https://images.unsplash.com/photo-1596238276574-b3e8d40fbafb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18
    },
    {
        id: 7,
        title: 'ROPICAL PEACE LILY',
        img: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU1fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 16
    },
    {
        id: 8,
        title: "HEART'S DESIRE",
        img: "https://images.unsplash.com/photo-1591963944277-fe153988e471?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 17
    }
]

const Products = () => {
    return (
       <div style={{background:'#E2AA70'}} id="product">
            <div className='container p-5 mx-auto' id='blog' >
        <div className="text-5xl leading-4 font-extrabold text-green-900 py-8 flex items-center justify-center">
        <h2 className='py-3 pl-3'>Top Products</h2>
        </div>
            <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center'>
                {
                    topProducts.map(pd => <TopProduct key={pd.id} pd={pd} />)
                }
            </div>
        </div>
       </div>
    );
};

export default Products;