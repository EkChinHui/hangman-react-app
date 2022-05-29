import {useEffect, useState} from "react"

import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
// import SinglePlayer from "./SinglePlayer";
import Game from "./components/Game"
import Instructions from "./components/Instructions"

const routes = {
    '#/single': <Game/>,
    '': <Instructions/>
}

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.hash)
    
    useEffect(() => {
        const cb = () => {
            setCurrentPath(window.location.hash)
        }
        window.addEventListener("hashchange", cb)
        return () => {
            window.removeEventListener('hashchange', cb)
        }
    }, [])
    
    const currentView = routes[currentPath]
        
    return (
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Hangman</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#/single">Single Player</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {currentView}
        </div>
    );
}

export default App;
