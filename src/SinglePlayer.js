import {useRef} from "react";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function SinglePlayer() {
    const imageRef = useRef()

    async function wrongAnswer() {
        let rotator = imageRef.current,
            dir = 'images/',
            num = 2;
        for (let i = 0; i < 5; i++) {
            console.log(num);
            rotator.src = dir + num + '.jpg';
            await sleep(200)
            num++;
        }
    }

    return (
        <>
            <button onClick={wrongAnswer}>hello</button>
            <img ref={imageRef} src={"images/1.jpg"} alt="balloon-boy" style={{
                width: "45%",
                maxHeight: "100%"
            }}/>
        </>
    )
}

export default SinglePlayer