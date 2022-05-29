import React from 'react'
import {Col} from 'react-bootstrap';

function KeyboardButton({letter, onClick, correctLetters, wrongLetters}) {

    function getColor() {
        let lowered = letter.toLowerCase()
        if (correctLetters.includes(lowered)) {
            return "green";
        } else if (wrongLetters.includes(lowered)) {
            return "red";
        } else {
            return "";
        }
    }

    return (
        <Col className="col-2 px-0 mx-0">
            <div className="kbd-btn" onClick={onClick} style={{backgroundColor: getColor()}}>
                {letter}
            </div>
        </Col>

    )
}

export default KeyboardButton
