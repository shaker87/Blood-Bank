import React from 'react';

const Footer = () => {
    const date = new Date();
    console.log(date)
    return (
        <div className="bg-dark text-white pt-3 pb-3 text-center">
            <h6>&copy; {date.getFullYear()} copyright by Shaker Hossain</h6>
        </div>
    );
};

export default Footer;