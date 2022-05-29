import React from 'react'

function Word({selectedWord, correctLetters}) {
    return (
        <div className="words-display p-5">
            {selectedWord.split('').map((letter, i) => {
                return (<span className="letter" key={i}>{correctLetters.includes(letter) ? letter.toUpperCase() : ''}</span>)
            })}
        </div>
    )
}

export default Word
