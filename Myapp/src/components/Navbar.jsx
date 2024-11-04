import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo2.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#" },
    { id: 3, name: "Gsrm", link: "/#" },
    { id: 4, name: "Man", link: "/#" },
    { id: 5, name: "Woman", link: "/#" }
];

const DropdownLinks = [
    { id: 1, name: "Shirt", link: "/#" },
    { id: 2, name: "Pant", link: "/#" },
    { id: 3, name: "Bangla-Janga", link: "/#" },
    { id: 4, name: "Foreign-Boxer", link: "/#" }
];

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggle the dark mode and update the body class
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper nav */}
            <div className="bg-blue-500/40 py-3 sm:py-2">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    {/* Logo and brand name on the left */}
                    <div className="flex items-center gap-2">
                        <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Etrailor Logo" className="w-10 uppercase" />
                            Etrailor
                        </a>
                    </div>

                    {/* Search bar and Order button container */}
                    <div className="flex items-center gap-4">
                        {/* Search bar */}
                        <div className="relative group hidden sm:block">
                            <input 
                                type="text"
                                placeholder="Search"
                                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-2 focus:border-blue-500"
                            />
                            <IoMdSearch
                                className="text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-3"
                            />
                        </div>

                        {/* Order button */}
                        <button
                            onClick={() => alert("This feature will be available after December Final exam")}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">Order Now</span>
                            <FaCartShopping 
                                className="text-xl text-white drop-shadow-sm cursor-pointer"
                            />
                        </button>

                        {/* Dark Mode Switch */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDarkMode ? (
                                <BsFillSunFill className="text-yellow-500 text-xl" />
                            ) : (
                                <BsFillMoonStarsFill className="text-gray-800 dark:text-gray-300 text-xl" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* lower nav */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
                                {data.name}
                            </a>
                        </li>
                    ))}
                    {/* Dropdown */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Tailoring
                            <span>
                                <FaCaretDown className="transition-all   duration-200 group-hover:rotate-180" />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white dark:bg-gray-800 p-2 text-black dark:text-white shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id} className="hover:text-primary  dark:hover:bg-gray-700 rounded-md p-2">
                                        <a href={data.link} className="block">{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    {/* Login Button */}
                    <li>
    <button onClick={toggleModal} className="px-4 py-2 text-white-500  hover:text-primary ">
        Login
    </button>
</li>

                </ul>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-xl font-semibold mb-4 dark:text-white">Account Options</h2>
                        <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 mb-2" onClick={() => alert('After December Final')}>
                            Register
                        </button>
                        <button className="block w-full text-left py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => alert('After December Final')}>
                            Create Account
                        </button>
                        <button
                            onClick={toggleModal}
                            className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
