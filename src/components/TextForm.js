import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './TextForm.css'

export default function TextForm(props) {
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleToUppercase = () =>{
        console.log("Your text has been converted to Uppercase successfully.")
        const newText = text.toUpperCase();
        setText(newText);
    }
    const copyToClipboard = () =>{
        const newText = document.getElementById("Mytextarea")
        const newClipboard = document.getElementById("clipboard")
        try {
        newText.select()
        newText.setSelectionRange(0,-1)
        navigator.clipboard.writeText(newText.value)
        newClipboard.style.color = "#66FCF1"
        console.log("Your text has been copied");
        }
        catch{
            alert("Your text copy has been failed ")
        }
        setTimeout(() => {
            newClipboard.style.color = "#C5C6C7"
        }, 1500);
    }
    const clearText = () =>{
        const newText = "";
        setText(newText)
        
    }
    const handleExtraSpaces = () =>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        
    }
    const handleToLowercase = () =>{
        console.log("Your text has been converted to Uppercase successfully.")
        const newText = text.toLowerCase();
        setText(newText);
    }
    const [text, setText] = useState("");
    return (
        <>
        <section className='container1'>
            <div className="text-area-container">
                <div className="text-area-container-sub">
                    <h1>{props.heading} </h1>
                    <div className="icon-container">
                    <i onClick={copyToClipboard} id='clipboard' className="bi bi-clipboard-check-fill" rows=""></i>
                    <i onClick={clearText} className="bi bi-x-octagon-fill" rows=""></i>
                    </div>
                </div>
                <textarea value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="Mytextarea" ></textarea>
            </div>
            <div className="br-container">
            <div className="b-container">
            <button onClick={handleToUppercase} className="Button" rows="">Uppercase</button>
            <button onClick={handleToLowercase} className="Button" rows="">Lowercase</button>
            </div>
            <div className="r-container">
            <button onClick={handleExtraSpaces} className="Button" rows="">Remove Extra Space</button>
            </div>
            <div className="wc-container">
                <div className="w">
                    <h3>Words</h3>
                    <p>{text === '' ? text.split(" ").length -1 :text.split(" ").length}</p>
                </div>
                <div className="c">
                    <h3>Characters</h3>
                    <p>{text.length}</p>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: 'Heading Text'
}