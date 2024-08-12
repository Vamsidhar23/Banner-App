import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
    const [banner, setBanner] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/banner').then((response) => {
            setBanner(response.data);
            setTimeLeft(response.data.timer);
        });

        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!banner || !banner.isVisible) return null;

    return (
        <div className="banner">
            <h2>{banner.description}</h2>
            <p>Time Left: {timeLeft}s</p>
            <a href={banner.link}>Click Here</a>
        </div>
    );
};

export default Banner;
