import React from 'react'
import { toast } from 'react-toastify';

function Basic_Op({ text, setText }) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    toast.success('Converted to UpperCase!');
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    toast.success('Converted to LowerCase!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setText('');
    toast.success('Text cleared!');
  };

  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    toast.success('Removed extra spaces!');
  };

  return (
    <div>
      <button className="btn btn-sm mt-3 mb-2 d-block"
        style={{
          backgroundColor: 'tomato',
          color: 'white',
          pointerEvents: 'none',
          cursor: 'default'
        }}
      >
        Basic Text Operations
      </button>

      <button disabled={text.length === 0} onClick={handleUpClick} type="button" className="btn btn-primary btn-sm me-2 my-1">Convert to UpperCase</button>
      <button disabled={text.length === 0} onClick={handleLowClick} type="button" className="btn btn-primary btn-sm me-2 my-1">Convert to LowerCase</button>
      <button disabled={text.length === 0} onClick={handleCopy} type="button" className="btn btn-primary btn-sm me-2 my-1"> <i className="ri-clipboard-fill"></i> Copy Text</button>
      <button disabled={text.length === 0} onClick={handleRemoveSpaces} type="button" className="btn btn-primary btn-sm me-2 my-1"><i className="ri-eraser-fill"></i> Remove Extra Spaces</button>
      <button disabled={text.length === 0} onClick={handleClear} type="button" className="btn btn-primary btn-sm me-2 my-1"><i className="ri-delete-bin-fill"></i> Clear Text</button>
    </div>
  )
}

export default Basic_Op