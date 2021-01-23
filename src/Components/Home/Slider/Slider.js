import React from 'react';
import './Slider.css';
import slider1 from '../../../image/slider1.jpg';
import slider2 from '../../../image/slider2.jpg';
import slider3 from '../../../image/slider3.jpg';


const Slider = () => {
    return (
        <div className="slider-area">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" interval={1000}>
                        <img className="d-block w-100" src={slider1} alt="First slide" />
                        <div className="carousel-caption">
                            <h2 style={{ color: 'red', fontWeight: 'bold' }}>Donate Blood, Save Lifes</h2>
                        </div>
                    </div>
                    <div className="carousel-item" interval={500}>
                        <img className="d-block w-100" src={slider2} alt="Second slide" />
                        <div className="carousel-caption">
                            <h2 style={{fontWeight:'bold'}}>Donate Blood, Save Lifes</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider3} alt="Third slide" />
                        <div className="carousel-caption">
                            <h2 style={{ color: 'red', fontWeight: 'bold' }}>Donate Blood, Save Lifes</h2>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;