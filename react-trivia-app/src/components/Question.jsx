import React from 'react';

export default function Question({questions, currentIndex}){



    return(
                <div className="quiz-quest-top">  
                    <div className=" question-container border-blue question-align-left"> 
                    <span className="text-bold quiz-answTitleFont">Question: </span>
                    <span className="quiz-answFont"> {questions[currentIndex].question}</span>
                    </div>
                </div>


    )//return
}//Question


