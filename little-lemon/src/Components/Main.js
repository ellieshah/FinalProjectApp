import React from 'react';

const Main = () => {
    const handleReserve = () => {
        alert('Table reserved!');
    };

    return (
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <button onClick={handleReserve}>Reserve a Table</button>
        </div>
    );
};

export default Main;