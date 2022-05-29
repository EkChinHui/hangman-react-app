import React from 'react'

function Instructions() {
    return (
        <div>
            <h2 className="p-5">Instructions</h2>
            <p className="p-5">
                Hangman is a simple word guessing game. <br/>
                Players try to figure out an unknown word by guessing letters. <br/>
                For every wrong letter you guess, a balloon will pop. <br/>
                Once all the balloon pops, the game ends and you will have to restart. <br/>
                You have 7 guesses and can either type or click on the buttons to guess a letter.
            </p>
        </div>
    )
}

export default Instructions
