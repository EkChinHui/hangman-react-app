import React from 'react'
import {Col} from 'react-bootstrap';

function KeyboardButton({letter, onClick, correctLetters, wrongLetters}) {

    function getColor() {
        let lowered = letter.toLowerCase()
        if (correctLetters.includes(lowered)) {
            return "correct";
        } else if (wrongLetters.includes(lowered)) {
            return "wrong";
        } else {
            return "";
        }
    }

    return (
        <Col className="px-0 mx-0">
            <div className={"kbd-btn " + getColor()} onClick={onClick}>
                {letter}
            </div>
        </Col>

    )
}

export default KeyboardButton
