import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [description, setDescription] = useState('');
    const [timer, setTimer] = useState(0);
    const [link, setLink] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/banner').then((response) => {
            const banner = response.data;
            setDescription(banner.description);
            setTimer(banner.timer);
            setLink(banner.link);
            setIsVisible(banner.isVisible);
        });
    }, []);

    const handleSubmit = () => {
        axios.post('http://localhost:5000/banner', {
            description,
            timer,
            link,
            isVisible,
        }).then((response) => {
            alert('Banner updated successfully!');
        });
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Timer (seconds):
                <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} />
            </label>
            <label>
                Link:
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
            </label>
            <label>
                Banner Visible:
                <input type="checkbox" checked={isVisible} onChange={(e) => setIsVisible(e.target.checked)} />
            </label>
            <button onClick={handleSubmit}>Update Banner</button>
        </div>
    );
};

export default Dashboard;
