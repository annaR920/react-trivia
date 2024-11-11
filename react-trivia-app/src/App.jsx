import { useEffect, useState } from 'react'
import './App.css'

const questions = [
      { question: "How many US states begin with letter P?", 
        choices:["1","2","3","4"], correctAnswer: "1", 
        isAnswered: false},

      { question: "Austin is the capital of which US state?", 
        choices:["New Mexico","Utah","Georgia","Texas"], correctAnswer: "Texas",
        isAnswered: false},

      { question: "In what year was the building of the Brooklyn Bridge completed?", 
        choices:["1897","1883","1910","1901"], correctAnswer: "1883",
        isAnswered: false},

      { question: "Which US state borders six states and one Canadian province?", 
        choices:["Ohio","Michican","Idaho","North Dakota"], correctAnswer: "Idaho",
        isAnswered: false}
  ];
  let  log = [];

function App() {
  const [currentIndex, setNextCurrentIndex] = useState(0);
  const [currentQuestion, setNextCurrentQuestion] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  // const [selectedChoice, setSelectedChoice] = useState("");
  const [score, setScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [currentStatus, setCurrentStatus] = useState("Not Started");
  const [startButtonText, setStartButtonText] = useState("Start Quiz");

  // One time array initialization 
  const loadDataOnlyOnce = () => {
        setNextCurrentQuestion(questions[currentIndex].question);
    }
  useEffect(() => { loadDataOnlyOnce(); }, [])

  const checkAnswer = (answer) => {  
    // Check if the answer is correct
    const currentAnswer = questions[currentIndex].choices[answer];
    if (currentAnswer === questions[currentIndex].correctAnswer) {  
      if (score < questions.length){
          setScore(score + 1);
        }      
    }
    //Record when a question gets an answer. 
    trackLog(currentIndex);

    if (currentIndex+1 < questions.length){
      setIsNextDisabled(false);
      }
    }//checkAnswer

    const trackLog = (index) => {
      log.push(index);
      //setIsAnswered(true);
      console.log("log contains: ", log)
    };


    //Advance to next index
    const nextQuestion = (currentIndex) => {   
    const index = currentIndex + 1
    if (index < questions.length){
      setNextCurrentIndex(index);
      setNextCurrentQuestion(questions[index].question); 

      setIsNextDisabled(false);
      setIsPrevDisabled(false);
      setGameEnd(false);
      
    } else{ 
      setCurrentStatus("Game Over");
      setIsNextDisabled(true); 
      setIsPrevDisabled(true); 
      setGameEnd(true);}  
  };

  //Move to previous  
  const prevQuestion=(currentIndex) => {
        const index = currentIndex - 1;
        if (index >= 0){
            setNextCurrentIndex(index);
            setNextCurrentQuestion(questions[index].question);
            setIsPrevDisabled(false);
            setIsNextDisabled(false);
        } else{
            setIsPrevDisabled(true);
            setIsNextDisabled(false);
         } //grey out PREV button, Next button is selectable 
  };

  //Game Start and Restart  
  const gameStart = () => {
    setNextCurrentIndex(0);
    setNextCurrentQuestion(questions[currentIndex].question);
    setCurrentStatus("Game Started");
    setStartButtonText("Restart Quiz")
    setScore(0);
    setGameEnd(false);
  };



  return (
    <div className="base-container border-blue"> 
        
        {/* Welcome Box */}  
        <div className="welcomeText-container  border-blue">
            <h2 className="text-align-center">Welcome to anna920's Trivia App</h2>
            <p className="instruct-left"><span className="text-bold">Instructions:</span> There are 2 or more quizzes, each with 4 options. 
              Select your answer. If the answer is correct then you 1 is added to the score., click "Next" to see the next question.  The game ends after the last question..</p> 
        </div>

         {/* Start Button */}  
        <div className="Start-bnt-container">
            <button onClick={gameStart} className=" border-black"> {startButtonText} </button></div>
        <div>

         {/* quiz container */}  
        <div className="quiz-container border-blue">
           {/* question box */}
            <div className="quiz-quest-top">  
                <div className=" question-container border-blue question-align-left"> 
                  <span className="text-bold quiz-answTitleFont">Question: </span>
                  <span className="quiz-answFont"> {questions[currentIndex].question}</span>
                </div>
            </div>

            {/* answer box */}
            <div className="quiz-answ-padding">  
                <div className=" answer-container border-blue question-align-left"> 
                  <span className="quiz-answTitleFont">Select an answer:</span>
                  

                {/* inner option box */}
                <div className="innerOption"> 
                  {/* row 1 */}
                  <div className="answ-row quiz-answFont">
                    <span className=" quiz-answTitleFont text-bold">A. </span>
                    <button onClick={( )=> checkAnswer(0)}>
                      {questions[currentIndex].choices[0]}</button>
                  </div>

                  {/* row 2 */}
                  <div className="answ-row quiz-answFont">
                    <span className=" quiz-answTitleFont text-bold">B. </span>
                    <button onClick={( )=> checkAnswer(1)}>
                      {questions[currentIndex].choices[1]}</button>
                  </div>
                  
                  {/* row 3 */}                 
                  <div className="answ-row quiz-answFont">
                    <span className=" quiz-answTitleFont text-bold">C. </span>
                    <button onClick={( )=> checkAnswer(2)}>
                      {questions[currentIndex].choices[2]}</button>
                  </div>

                  {/* row 4 */}
                  <div className="answ-row quiz-answFont">
                    <span className=" quiz-answTitleFont text-bold">D. </span>
                    <button disabled={isAnswered} onClick={( )=> checkAnswer(3)}>
                      {questions[currentIndex].choices[3]}</button>
                  </div>
                </div> 
                </div>
            </div>
        </div>

         {/* score box */}
        <div className="score-container"> 
                  <p> <span className="scoreTitleFont text-bold">Score: </span>
                      <span className="scoreFont">{score}</span></p>

                  <p> <span className="scoreTitleFont text-bold">Game Status: </span>
                      <span className="scoreFont">{currentStatus} </span></p>
        </div>

         {/* Navigation box */}
        <div className="nav-container">
            <button className="nav-bnt border-black" disabled={isPrevDisabled} onClick={() => prevQuestion(currentIndex)}>
                    PREV
            </button>
            <button className="nav-bnt border-black" disabled={isNextDisabled} onClick={() => nextQuestion(currentIndex)}>
                    NEXT
            </button>
        </div>  
      </div>

      {/* base-container */}
      </div>

  ) // Return  
}

export default App;
