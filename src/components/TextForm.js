import React, { useState } from 'react'

export default function TextForm(props) {
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
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!", "success")
    }
    const [text, setText] = useState('');
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
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="accordion mx-3 my-3" id="accordionExample" style={{width:"28%",float:'right'}} >
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'dark' ? 'white' : '#042743',backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'}}>
                            <strong>Details</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={myStyle}>
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
                                        <td><span style={{ float: 'right' }}>{text.trim() === '' ? 0 : text.trim().split('.').length-1}</span></td>
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
