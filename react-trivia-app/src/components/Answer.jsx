import React from 'react';
import '../App.css';

export default function Answer({ questions, checkAnswer, currentIndex }) {
    return (
        <div className="quiz-container border-blue">
            <div className="quiz-answ-padding">
                <div className="answer-container border-blue question-align-left">
                    <div className='quiz-counter'><span className="quiz-answTitleFont">Select an answer:</span>
                        <span >{currentIndex}/{questions.length}</span>
                    </div>
                                        
                    <div className="innerOption2">
                        <div className="answ-row2 quiz-answFont">
                            <div className="rowList">
                                <ul>
                                    {questions[currentIndex].choices.map((choice, choiceIndex) => (
                                        <li key={choice}>
                                            <button onClick={() => checkAnswer(choiceIndex)}>
                                                {choice}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}