import React, { useState, useEffect } from 'react';
import Card from './Card'; // Assuming Card is a separate component
import './Dashboard.css';
import Report from './Report';
import { Link } from 'react-router-dom';
function Dashboard() {
    const [cards, setCards] = useState([]);
    const [hrData, setHRData] = useState(null);

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(e => console.log('Error fetching cards:', e.message));
        
        fetch('http://localhost:4000/hr')
            .then(res => res.json())
            .then(data => {
                console.log('Fetched HR data:', data); // Debug log
                setHRData(data);
            })
            .catch(e => console.log('Error fetching HR data:', e.message));
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <section className="dashboard section"> 
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {cards && cards.length > 0 && cards.map(card => 
                            (<Card key={card._id} card={card} />))}
                        <div className="col-12">
                            <Report />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
