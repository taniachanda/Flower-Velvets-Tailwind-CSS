import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="flex items-center justify-between flex-wrap text-yellow-500  p-6">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <span class="font-bold text-2xl tracking-tight">Flower Velvets</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <ul class="lg:flex-grow text-yellow-500 text-lg font-semibold">
                        <li href="#home" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </li>
                        <li href="#product" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Products
                        </li>
                        <li href="#Testimony" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Testimony
                        </li>
                    </ul>
                    <div>
                        <button href="#" class="bg-yellow-500 text-green-900 font-semibold py-2 px-6 inline-block leading-none border rounded border-green hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;