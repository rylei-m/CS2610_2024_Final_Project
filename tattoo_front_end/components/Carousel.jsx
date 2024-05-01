import React from 'react';
import './Carousel.css'; // Import CSS styles for the carousel

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-inner" id="carouselSlides">
                <div className="slides">
                    <img src={require('../images/home1.png')} alt="Image 1" />
                    <img src={require('../images/home2.png')} alt="Image 2" />
                    <img src={require('../images/home3.png')} alt="Image 3" />
                    <img src={require('../images/home1.png')} alt="Image 4" />
                    <img src={require('../images/home2.png')} alt="Image 5" />
                    <img src={require('../images/home3.png')} alt="Image 6" />
                </div>
                <div className="buttons">
                    <button onClick={this.prevSlide}>Prev</button>
                    <button onClick={this.nextSlide}>Next</button>
                </div>
            </div>
        );
    }

    prevSlide() {
        // Implement previous slide logic here
    }

    nextSlide() {
        // Implement next slide logic here
    }
}

export default Carousel;
