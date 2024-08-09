import React, { useState } from 'react';
import CardFilter from './CardFilter'; // Ensure this is the correct path
import './HRCard.css';

function HRCard({ hr }) {
    const [filter, setFilter] = useState('Today'); // Default filter state

    const handleFilterChange = (filter) => {
        setFilter(filter);
        // Add logic to update the displayed data based on the selected filter
    };

    const cardData = [
        {
            title: 'Days Left to Hire',
            icon: 'bi-calendar-minus-fill',
            value: hr.days_left_to_hire || 'N/A',
            additionalInfo: '15/08/2024',
            width: 'col-xxl-4 col-md-6',
        },
        {
            title: 'Employees',
            icon: 'bi-people-fill',
            value: hr.number_of_employees || 'N/A',
            additionalInfo: '2% increase',
            width: 'col-xxl-4 col-md-6',
        },
        {
            title: 'Visa Expiry',
            icon: 'bi bi-passport',
            value: hr.visa  + ' days' || 'N/A',
            additionalInfo: '27/08/2024',
            width: 'col-xxl-4 col-md-6',
        },
        {
            title: 'Leaves',
            icon: 'bi bi-passport',
            value: hr.leaves + ' days' || 'N/A',
            additionalInfo: 'Allowed: 4',
            width: 'col-xxl-4 col-md-6',
        },
        // {
        //     title: 'Passport',
        //     icon: 'bi bi-file-earmark-break',
        //     value: hr.visa + ' days' || 'N/A',
        //     additionalInfo: '29/08/2024',
        //     width: 'col-xxl-4 col-md-6',
        // },
        // {
        //     title: 'Leave Details',
        //     icon: 'bi-calendar-check',
        //     value: (
        //         <ul className="leave-details-list">
        //             {hr.employee_deets && hr.employee_deets.length > 0 ? (
        //                 hr.employee_deets.map((employee_deets) => (
        //                     <li key={employee_deets.employee_id}>
        //                         <span className="leave-name">{employee_deets.name}</span>
        //                         <span className="leave-date">Leave - {employee_deets.leave_date}</span>
        //                         <span className="leave-reason">{employee_deets.reason}</span>
        //                     </li>
        //                 ))
        //             ) : (
        //                 <li>No leave data available</li>
        //             )}
        //         </ul>
        //     ),
        //     width: 'col-xxl-4 col-md-6',
        // },
    ];

    return (
        <div className="row">
            {cardData.map((card, index) => (
                <div key={index} className={card.width}>
                    <div className="card info">
                        <div className="cardbody">
                            <h5 className="card-title">
                                {card.title} <span>| {filter}</span>
                            </h5>
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className={`bi ${card.icon} iconic`}></i>
                            </div>
                            <CardFilter filterChange={handleFilterChange} />
                            <div className="ps-1">
                                <h6>{card.value}</h6>
                                {card.additionalInfo && <p className="deadline">{card.additionalInfo}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HRCard;
