import React from 'react';
import { Carousel } from '3d-react-carousal';

const slides = [
    <img style={{ width: "100%" }} src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFub3JhbWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="slider" />,
    <img style={{ width: "100%" }} src="https://i.pinimg.com/originals/68/e9/b6/68e9b693e5c5e30ceac8d17794a513ed.jpg" alt="slider" />,
    <img style={{ width: "100%" }} src="https://i.pinimg.com/originals/a5/ee/b3/a5eeb3f3061d81478eb7bbc43dc99669.jpg" alt="slider" />,
    <img style={{ width: "100%" }} src="https://www.australianlight.com.au/uploaded/public/5032a049c75dc3.41374619.jpg" alt="slider" />,
];

function CarouselTwo() {
    
    return (
        <Carousel  slides={slides} autoplay={true} interval={2000} />
    )
}

export default CarouselTwo;







