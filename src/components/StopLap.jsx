import React, { useState, useEffect, useRef } from "react";
import './StopLap.css';

function Stopwatch({ setEditorEnabled, isTimerLocked }) {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 1);
    } else {
      clearInterval(intervalIdRef.current);
    }

    return () => clearInterval(intervalIdRef.current);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    setEditorEnabled(true); // Enable editor when stopwatch starts
  }

  function stop() {
    setIsRunning(false);
    setEditorEnabled(false); // Disable editor when stopwatch stops
  }

  function reset() {
    setElapsedTime(0);
    setLaps([]);
    clearInterval(intervalIdRef.current);
    setIsRunning(false);
    startTimeRef.current = 0;
    setEditorEnabled(false); // Disable editor when stopwatch resets
  }

  function addLap() {
    setLaps([elapsedTime, ...laps]);
  }

  function formatTime(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = time % 1000;

    return (
      <span>
        {hours > 0 && <span>{String(hours).padStart(2, '0')}:&nbsp;</span>}
        <span>{String(minutes).padStart(2, '0')}</span>
        <span className="semi">:</span>
        <span>{String(seconds).padStart(2, '0')}</span>
        <span className="semi">:</span>
        <span>{String(milliseconds).padStart(3, '0')}</span>
      </span>
    );
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime(elapsedTime)}</div>
      <div className="controls">
        {isRunning ? (
          <button onClick={stop} className="stop-btn" disabled={isTimerLocked}>Stop</button>
        ) : (
          <button onClick={start} className="start-btn" disabled={isTimerLocked}>Start</button>
        )}
        <button onClick={reset} className="reset-btn" disabled={isTimerLocked}>Reset</button>
        {isRunning && <button onClick={addLap} className="lap-btn" disabled={isTimerLocked}>Lap</button>}
      </div>
      <div className="laps">
        {laps.map((lap, index) => (
          <div key={index} className="lap">
            <span className="lap-number">Lap {laps.length - index}</span>
            <span className="lap-time">{formatTime(lap)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stopwatch;
