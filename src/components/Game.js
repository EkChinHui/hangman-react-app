import {React, useRef, useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Word from './Word'
import KeyboardButton from "./KeyboardButton";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const words = ['hello', 'world']

// selects a random word from words
let selectedWord = words[Math.floor(Math.random() * words.length)]
console.log(selectedWord)
let num = 2; // magic literals
let alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']


function Game() {
    const imageRef = useRef()
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])

    function check_letter(letter) {
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
                wrongAnswer();
                if (wrongLetters.length >= 5) {
                    setPlayable(false)
                    // notify user that they lost
                }
            } else {
                // notify user that letter has been chosen already
            }
        }
    }

    // for keyboard input
    useEffect(() => {
        const handleKeydown = event => {
            const {key, keyCode} = event;
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();                
                // input a letter in the word
                check_letter(letter)
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctLetters, wrongLetters, playable]); // function only called when cl, wl and playable are changed

    function handleButtonClick(letter) {
        if (playable) {
            check_letter(letter.toLowerCase());
        }
    }

    function renderKeyboardButton(letter, i) {
        return (
            <KeyboardButton letter={letter} key={i} onClick={() => handleButtonClick(letter)} correctLetters={correctLetters} wrongLetters={wrongLetters}/>
        );
    }
    
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
                    <img className="p-5" ref={imageRef} src={"images/1.jpg"} alt="balloon-boy" style={{
                        width: "45%",
                        maxHeight: "100%"
                        }}/>
                    <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
                    
                    </Col>
                    <Col>
                        <h3 id="instructions" className="p-4">Choose one of the alphabets below!</h3>
                        <Container>
                            <Row className="g-0 mx-0 px-0 gx-0">
                                {alphabets.map((letter, i) => 
                                    renderKeyboardButton(letter, i)
                                )}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Game
