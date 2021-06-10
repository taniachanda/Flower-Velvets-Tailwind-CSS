import React from 'react';
const Header = () => {
    return (<div id="home">
        <div class="bg-no-repeat bg-center md:pl-0 md:flex items-center justify-center" id="home" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1517017385270-bd3aa4f39d9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80")`, width: '100%', height: "100vh" }}>
            <div class="md:text-center sm:text-left">
                <h1 class="text-6xl md:leading-4 md:font-extrabold text-yellow-500 md:py-5 ">Flower Velvets</h1>
                <h4 class="py-5 text-2xl font-normal text-green-900">Natural & Beautiful Flower Here</h4>
                <button class="bg-yellow-500 hover:bg-green-900 text-green-900 hover:text-yellow-500 font-bold py-4 px-6 rounded-full">
                    Shop Now
                </button>
            </div>
        </div>
    </div>
    );
};

export default Header;