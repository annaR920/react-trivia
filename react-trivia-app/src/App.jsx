import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from "./components/Welcome.jsx";
import StartButton from "./components/StartButton.jsx";
import Question from "./components/Question.jsx";
import Answer from "./components/Answer.jsx";
import Navigation from "./components/Navigation.jsx";
import { questions } from "./data/triviaData";


function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [startButtonText, setStartButtonText] = useState("Start Quiz");

    // Game Start and Restart  
    const gameStart = () => {
        setCurrentIndex(0);
        setScore(0);
        setStartButtonText("Restart Quiz");
    };

    // Check Answer logic
    const checkAnswer = (answer) => {
        const currentAnswer = questions[currentIndex].choices[answer];
        if (currentAnswer === questions[currentIndex].correctAnswer) {
            setScore(prevScore => prevScore + 1);
        }
        setIsNextDisabled(false); // Enable Next after an answer is selected
    };

    // Handle Next Button Click
    const nextQuestion = () => {
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    // Handle Prev Button Click
    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    // Disable/Enable Prev/Next Buttons based on currentIndex.
    useEffect(() => {
        setIsPrevDisabled(currentIndex === 0); // Disable Prev on the first question
        setIsNextDisabled(currentIndex === questions.length - 1); // Disable Next on the last question
    }, [currentIndex]);


    return (
        <div className="base-container border-blue">
            {/* Welcome Component */}
            <Welcome />

            {/* Start Button Component */}
            <StartButton gameStart={gameStart} startButtonText={startButtonText} />

            {/* Question box */}
            <Question questions={questions} currentIndex={currentIndex} />

            {/* Answer Component */}
            <Answer
                questions={questions}
                checkAnswer={checkAnswer}
                currentIndex={currentIndex}
            />

            {/* Score Component */}
            <div className="score-container">
                <p><span className="scoreTitleFont text-bold">Score: </span><span className="scoreFont">{score}</span></p>
            </div>

            {/* Navigation Component */}
            <Navigation
                prevQuestion={prevQuestion}
                nextQuestion={nextQuestion}
                currentIndex={currentIndex}
                isNextDisabled={isNextDisabled}
                isPrevDisabled={isPrevDisabled}
            />
        </div>
    );
}

export default App;