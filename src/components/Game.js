import {React, useRef, useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Word from './Word'

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const words = ['hello']

// selects a random word from words
let selectedWord = words[Math.floor(Math.random() * words.length)]
console.log(selectedWord)

function Game() {
    const imageRef = useRef()
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])

    // for keyboard input
    useEffect(() => {
        const handleKeydown = event => {
            const {key, keyCode} = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();
                
                // input a letter in the word
                if (selectedWord.includes(letter)) {
                    // and not already keyed in 
                    if (!correctLetters.includes(letter)) {
                        // adds letter into correct letter 
                        // can't use .push because immutability
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        // notify user that letter has been chosen already
                    }
                } else { // letter not in word
                    if (!wrongLetters.includes(letter)) {
                        // adds letter into correct letter 
                        // can't use .push because immutability
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    } else {
                        // notify user that letter has been chosen already
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]); // function only called when cl, wl and playable are changed

    let num = 2; // magic literals
    // refactor this
    async function wrongAnswer() {
        let rotator = imageRef.current,
            dir = 'images/';
        if (num < 22) {
            for (let i = 0; i < 5; i++) {
                console.log(num);
                rotator.src = dir + num + '.jpg';
                await sleep(200)
                num++;
            }
        }
        else {
            
        }
    }

    

    return (
        <>
            <Container fluid className="">
                <Row>
                    <Col>                
                    <img ref={imageRef} src={"images/1.jpg"} alt="balloon-boy" style={{
                        width: "45%",
                        maxHeight: "100%"
                        }}/>
                    </Col>
                    <Col>
                        <button onClick={wrongAnswer}>hello</button>
                        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Game
