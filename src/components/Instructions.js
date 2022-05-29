import React from 'react'

function Instructions() {
    return (
        <div>
            <h2 className="p-5">Instructions</h2>
            <p className="p-5">
                Hangman is a simple word guessing game. <br/>
                Players try to figure out an unknown word by guessing letters. <br/>
                If too many letters which do not appear in the word are guessed, the player is hanged (and loses). <br/>
                You have 7 guesses and can either type or click on the buttons to guess a letter.
            </p>
        </div>
    )
}

export default Instructions
