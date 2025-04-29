import React from 'react'
import { toast } from 'react-toastify';

function Case_Conversion({ text, setText }) {

  const handleTitleCase = () => {
    const titleCased = text
      .toLowerCase()
      .split(' ')
      .map(word =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join(' ');
    setText(titleCased);
    toast.success('Converted to Title Case');
  };

  const handleSentenceCase = () => {
    const sentenceCased = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]+(\s+|)\w)/g, match => match.toUpperCase());
    setText(sentenceCased);
    toast.success('Converted to Sentence Case');
  };

  const handleToggleCase = () => {
    const toggled = text
      .split('')
      .map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
      )
      .join('');
    setText(toggled);
    toast.success('Converted to Toggle Case');
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
        Case Conversion
      </button>

      <button disabled={text.length === 0} onClick={handleTitleCase} type="button" className="btn btn-success btn-sm me-2 my-1">Title Case</button>
      <button disabled={text.length === 0} onClick={handleSentenceCase} type="button" className="btn btn-success btn-sm me-2 my-1">Sentence Case</button>
      <button disabled={text.length === 0} onClick={handleToggleCase} type="button" className="btn btn-success btn-sm me-2 my-1">Toggle Case</button>
    </div>
  )
}

export default Case_Conversion