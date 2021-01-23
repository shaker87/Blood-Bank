import React from 'react';
import Footer from '../../Footer/Footer';
import Contact from '../Contact/Contact';
import Donor from '../Donor/Donor';
import OBBMS from '../OBBMS/OBBMS';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OBBMS></OBBMS>
            <Donor></Donor>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;