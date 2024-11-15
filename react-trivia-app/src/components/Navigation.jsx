import React from 'react';

export default function Navigation({ prevQuestion, nextQuestion, isNextDisabled, isPrevDisabled }) {
    return (
        <div className="nav-container">
            <button className="nav-bnt border-black" disabled={isPrevDisabled} onClick={prevQuestion}>
                PREV
            </button>
            <button className="nav-bnt border-black" disabled={isNextDisabled} onClick={nextQuestion}>
                NEXT
            </button>
        </div>
    );
} // .