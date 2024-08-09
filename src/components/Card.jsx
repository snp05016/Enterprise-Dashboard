import React, { useState } from 'react';
import CardFilter from './CardFilter'; // Ensure this is the correct path
import './Card.css'
function Card({ card }) {
    const [filter, setFilter] = useState('Today'); // Fixed variable name to `filter`

    const handleFilterChange = filter => {
        setFilter(filter); // Updated to use event value
    };

    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <CardFilter filterChange={handleFilterChange} />
                <div className="card-body">
                    <h5 className="card-title">
                        {card.name} <span>| {filter}</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={card.icon}></i>
                        </div>
                        <div className="ps-3">
                            <h6>
                                {card.name === 'Revenue'
                                    ? card.amount.toLocaleString('en-US') + 'د.إ' 
                                    : card.amount.toLocaleString('en-US')}
                            </h6>
                            <span
                    className={`${
                        card.percentage > 0 ? 'text-success' : 'text-danger'
                    } small pt-1 fw-bold`}
                >
                    {card.percentage > 0
                        ? card.percentage * 100
                        : -card.percentage * 100}
                    % &nbsp;&nbsp;{card.percentage > 0 ? 'increase' : 'decrease'}
                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
