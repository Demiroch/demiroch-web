import Licence4 from '../../resources/Licencias/Drrivers_License_Gideon.png';
import Licence2 from '../../resources/Licencias/Drrivers_License_MArcoDiaz.png';
import Licence3 from '../../resources/Licencias/Drrivers_License_Abyo.png';
import Licence1 from '../../resources/Licencias/Drrivers_License_Sprig.png';
import left from '../../resources/Iconos/Demiroch_arrows_Left.png';
import right from '../../resources/Iconos/Demiroch_arrows_Right.png';
import "./ImageSlider.css"
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const getCarouselItem = (src, alt) => {
        return <Carousel.Item className="carousel-item-custom">
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100 carousel-image"
                            src={src}
                            alt={alt}/>
                    </div>
                </Carousel.Item>
    }

    const getLeftIcon = () => {
        return <img src={left} className="arrow-carousel" id="left-arrow"  alt="Left-Arrow"/>;
    }

    const getRightIcon = () => {
        return <img src={right} className="arrow-carousel" id="right-arrow" alt="Right-Arrow"/>;
    }

    return (
        <div>
            <Carousel variant="dark"
                      indicators={false}
                      controls={true}
                      prevIcon={getLeftIcon()}
                      nextIcon={getRightIcon()}
                      className="slider-container"
                      activeIndex={index} onSelect={handleSelect}>
                {getCarouselItem(Licence1, "First")}
                {getCarouselItem(Licence2, "Second")}
                {getCarouselItem(Licence3, "Third")}
                {getCarouselItem(Licence4, "Fourth")}
            </Carousel>
        </div>
    );
}
