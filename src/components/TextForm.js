import React,{ useState } from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {

    const handleUpperClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('CONVERTED TO UPPER CASE','success')
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('converted to lower case','success')

    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert('Text CLeared','success')

    }
    const handleCopyClick=()=>{
        var text= document.getElementById('myBox')
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to Clipboard','success')
    }
    const handleExtraSpace=()=>{
        let newText= text.split(/[ ]*/)
        setText(newText.join(''))
        props.showAlert('Removed extra space','success')
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('')
        return (
            <>
            <div className='container my-2' style={{color: props.mode === 'dark'?'white':'black'}}>
                    <h1>{props.heading}</h1>
                <div className="container">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#464646':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8" placeholder='Enter Text'></textarea>
                    <br />
                    <button className="btn btn-primary mx-2" onClick={handleUpperClick}>UPPERCASE</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowerClick}>lowercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>ClearText</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopyClick}>CopyText</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>ExtraSpace</button>
                </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter text in text box for Preview'}</p>
            </div>
            </div>
            </>
        )
}

TextForm.prototype = {
    heading : PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading : 'Enter Text'
}