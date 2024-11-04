import React from 'react';
import Image1 from '../Imge/man.jpg';
import Image2 from '../Imge/shoping.jpg';
import Image3 from '../Imge/sale.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto Man",
        description: "Discover the latest trends in men’s fashion with incredible offers.",
    },
    {
        id: 2,
        img: Image2,
        title: "Shopping Sale",
        description: "Experience unmatched deals with our exclusive shopping sale.",
    },
    {
        id: 3,
        img: Image3,
        title: "Seasonal Sale",
        description: "Catch the best seasonal discounts on all your favorite items.",
    },
];

const Hero = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center 
        items-center dark:bg-gray-900 dark:text-white duration-200">
            {/* Background Pattern */}
            <div className="absolute h-[700px] w-[700px] bg-gradient-to-br from-purple-400 to-indigo-600 opacity-30 rounded-full -top-1/3 right-0 transform rotate-45 -z-10"></div>
            
            {/* Hero Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                    {/* Text Content Section */}
                    <div className="space-y-4 text-center sm:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-gray-200">
                            Explore the Latest Trends
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                            Elevate your style with our exclusive collection and enjoy up to 50% off.
                        </p>
                        <button
                            className="mt-4 bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition duration-300 transform hover:scale-105 text-white py-3 px-6 rounded-full font-semibold">
                            Shop Now
                        </button>
                    </div>
                    
                    {/* Slider Section */}
                    <div className="relative z-10 max-w-md mx-auto">
                        <Slider {...sliderSettings}>
                            {ImageList.map((image) => (
                                <div key={image.id} className="text-center">
                                    <img src={image.img} alt={image.title} className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto rounded-lg shadow-lg" />
                                    <div className="mt-4">
                                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{image.title}</h2>
                                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{image.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
