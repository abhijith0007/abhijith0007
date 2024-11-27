import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("hi this abhijith");
    const cuc = () => {
        console.log("text me!");
        let uc = text.toLocaleUpperCase();
        settext(uc);
    }
    const clc = () => {
        console.log("text me!");
        let uc = text.toLocaleLowerCase();
        settext(uc);
    }
    const clear = () => {
        console.log("text me!");
        let bc = "";
        settext(bc);
    }
    const handleonchange = (event) => {
        console.log("change")
        settext(event.target.value)
    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>
                    audit
                </h1>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">{props.title}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleonchange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={cuc}>converT to UC</button>
                <button className="btn btn-primary mx-2" onClick={clc}>converT to LC</button>
                <button className="btn btn-primary mx-2" onClick={clear}>clear</button>

            </div>
            <div className="conatiner my-2">
                <h1>text summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length}charters</p>
                <p> {0.9 * text.split(" ").length}sec to  reads</p>
            </div>
            <h1>preview</h1>
            <p>{text.length > 0 ? text : 'enter the text'}</p>

        </>
    )
}
