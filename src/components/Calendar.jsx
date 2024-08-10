import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Calendar.css';

const Cal = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventName, setEventName] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [events, setEvents] = useState([]);
    const [showEventForm, setShowEventForm] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [updateEventId, setUpdateEventId] = useState(null);
    const [updateEventName, setUpdateEventName] = useState("");

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setErrorMessage("");
    };

    const handleEventNameChange = (event) => {
        setEventName(event.target.value);
    };

    const handleEventTimeChange = (event) => {
        setEventTime(event.target.value);
    };

    const handleCreateEvent = () => {
        if (selectedDate && eventName && eventTime) {
            const newEvent = {
                id: new Date().getTime(),
                date: new Date(`${selectedDate.toDateString()} ${eventTime}`),
                title: eventName,
            };
            setEvents([...events, newEvent]);
            setShowEventForm(false);
            setEventName("");
            setEventTime("");
        }
    };

    const handleUpdateEvent = (eventId, newName) => {
        const updatedEvents = events.map((event) => {
            if (event.id === eventId) {
                return {
                    ...event,
                    title: newName,
                };
            }
            return event;
        });
        setEvents(updatedEvents);
        setUpdateEventId(null);
        setUpdateEventName("");
    };

    const handleDeleteEvent = (eventId) => {
        const updatedEvents = events.filter((event) => event.id !== eventId);
        setEvents(updatedEvents);
    };

    const handleCloseEventForm = () => {
        setShowEventForm(false);
    };

    const handleAddEventButtonClick = () => {
        if (selectedDate) {
            setShowEventForm(true);
        } else {
            setErrorMessage("You haven't selected a date.");
        }
    };

    const handleUpdateButtonClick = (eventId, currentName) => {
        setUpdateEventId(eventId);
        setUpdateEventName(currentName);
    };

    const handleUpdateEventNameChange = (event) => {
        setUpdateEventName(event.target.value);
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    const sortedEvents = events.sort((a, b) => a.date - b.date);

    return (
        <div>
            <div className="btncont">
            <button className="toggle-calendar-btn" onClick={toggleCalendar}>
                <i className='bi bi-calendar calbtn'/>
            </button></div>

            <div className={`calendar-container ${showCalendar ? 'hide' : 'show'}`}>
                <h1 className="h1n">Calendar</h1>
                
                <button className="add-event-btn" onClick={handleAddEventButtonClick}>
                    <i className="bi bi-calendar2-plus"></i>
                </button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="container">
                    <Calendar
                        value={selectedDate}
                        onClickDay={handleDateClick}
                        tileClassName={({ date }) =>
                            selectedDate &&
                            date.toDateString() === selectedDate.toDateString()
                                ? "selected"
                                : events.some(
                                    (event) =>
                                        event.date.toDateString() ===
                                        date.toDateString(),
                                )
                                    ? "event-marked"
                                    : ""
                        }
                    />
                </div>

                <div className="event-list-container">
                    {events.length > 0 && (
                        <div className="event-list">
                            <h3>Events Scheduled</h3>
                            <div className="event-cards">
                                {sortedEvents.map((event) => (
                                    <div key={event.id}
                                         className="event-card">
                                        <div className="event-card-header">
                                            <span className="event-date">
                                                {event.date.toDateString()} {event.date.toLocaleTimeString()}
                                            </span>
                                            <div className="event-actions">
                                                <button
                                                    className="update-btn"
                                                    onClick={() =>
                                                        handleUpdateButtonClick(
                                                            event.id,
                                                            event.title,
                                                        )
                                                    }
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() =>
                                                        handleDeleteEvent(
                                                            event.id,
                                                        )
                                                    }
                                                >
                                                    <i className="bi bi-calendar-x"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="event-card-body">
                                            <p className="event-title">
                                                {event.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className={`event-form-container ${showEventForm ? 'show' : 'hide'}`}>
                    {showEventForm && (
                        <div className="event-form">
                            <button className="close-btn" onClick={handleCloseEventForm}>×</button>
                            <h2>Create Event</h2>
                            <p>
                                Selected Date: {selectedDate ? selectedDate.toDateString() : ""}
                            </p>
                            <input
                                type="time"
                                value={eventTime}
                                onChange={handleEventTimeChange}
                            />
                            <input
                                type="text"
                                placeholder="Event Name"
                                value={eventName}
                                onChange={handleEventNameChange}
                            />
                            <button
                                className="create-btn"
                                onClick={handleCreateEvent}
                            >
                                Click Here to Add Event
                            </button>
                        </div>
                    )}
                </div>

                <div className={`update-event-form-container ${updateEventId !== null ? 'show' : 'hide'}`}>
                    {updateEventId !== null && (
                        <div className="update-event-form">
                            <button className="close-btn" onClick={() => setUpdateEventId(null)}>×</button>
                            <h2>Update Event</h2>
                            <input
                                type="text"
                                value={updateEventName}
                                onChange={handleUpdateEventNameChange}
                            />
                            <button
                                className="new-up-btn"
                                onClick={() => handleUpdateEvent(updateEventId, updateEventName)}
                            >
                                Update Event
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cal;
