import React from 'react';

const StartButton = ({gameStart, startButtonText}) => {
    return(
        <div className="Start-bnt-container">
            <button onClick={gameStart} className=" border-black"> {startButtonText} </button>
        </div>
    )//return
}//Question

export default StartButton;
