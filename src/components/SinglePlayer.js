import {useRef} from "react";

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function SinglePlayer() {
    const imageRef = useRef()
    let num = 2;
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
            <div>
                <button onClick={wrongAnswer}>hello</button>
                <img ref={imageRef} src={"images/1.jpg"} alt="balloon-boy" style={{
                    width: "45%",
                    maxHeight: "100%"
                }}/>
            </div>
            <div>
                {/*grid of letters*/}
            </div>
        </>
    )
}

export default SinglePlayer