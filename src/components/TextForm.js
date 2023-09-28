import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = () => {
        let text = document.getElementById('mybox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success")
    }
    const handlePaste = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setText(clipboardText);
            props.showAlert("Text pasted!", 'success');
        }
        catch (error) {
            console.error("Error pasting text!", 'error');
            props.showAlert("Nothing to paste!", 'error')
        }
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!", "success")
    }
    const handleReplaceClick = () => {
        const findText = window.prompt('Enter text to find:');
        if (findText !== null) {
          const replaceText = window.prompt('Enter replacement text:');
          if (replaceText !== null) {
            const replacedText = text.replace(new RegExp(findText, 'g'), replaceText);
            if (replacedText !== text) {
              setText(replacedText);
              props.showAlert('Text replaced!', 'success');
            } else {
              props.showAlert('No matches found for replacement!', 'info');
            }
          }
        }
      };

    let cssStyle2 = {
        width: '50%',
        float: 'left'
    }
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="6"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Uppercase
                    <img src="../../uppercase.png" alt="Alt Text" className="button-image" style={{ width: "20px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Lowercase
                    <img src="../../lowercase.png" alt="Alt Text" className="button-image" style={{ width: "20px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear <img src="../../trash.svg" alt="Alt Text" className="button-image" style={{ width: "20px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginBottom: "5px", padding: "3px" }} /></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy
                    <img src="../../copy.png" alt="Alt Text" className="button-image" style={{ width: "18px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
                <button className="btn btn-primary mx-1 my-1" onClick={handlePaste}>Paste
                    <img src="../../paste.svg" alt="Alt Text" className="button-image" style={{ width: "18px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleReplaceClick}>Replace
                    <img src="../../replace.png" alt="Alt Text" className="button-image" style={{ width: "18px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Extra Spaces
                    <img src="../../space.svg" alt="Alt Text" className="button-image" style={{ width: "19px", filter: "invert(100%) sepia(100%) saturate(2%) hue-rotate(256deg) brightness(103%) contrast(101%)", marginLeft: "5px", marginBottom: "5px" }} /></button>
            </div>
            <div className="accordion mx-3 my-3" id="accordionExample" style={{ width: "37%", float: 'right' }} >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode === 'dark' ? 'white' : '#042743', backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' }}>
                            <strong>Details</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <table className="table">
                                <tbody>
                                    <tr style={myStyle}>
                                        <th scope="row">1</th>
                                        <td>Words</td>
                                        <td><span style={{ float: 'right' }}>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</span></td>
                                    </tr>
                                    <tr style={myStyle}>
                                        <th scope="row">2</th>
                                        <td>Characters</td>
                                        <td><span style={{ float: 'right' }}>{text.replace(/\s+/g, '').length}</span></td>
                                    </tr>
                                    <tr style={myStyle}>
                                        <th scope="row">3</th>
                                        <td>Sentences</td>
                                        <td><span style={{ float: 'right' }}>{text.trim() === '' ? 0 : text.trim().split('.').length - 1}</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} styel={cssStyle2}>
                <h3>Your Text summary:</h3>
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words  {text.replace(/\s+/g, '').length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : "Nothing to preview."}</p>

            </div>
        </>
    )
}
