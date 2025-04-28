import React from 'react'
import { toast } from 'react-toastify';

function Text_Reversal({text, setText}) {

  const handleReverseLine = () => {
    const lines = text.split('\n');
    const reversedLines = [...lines].reverse().join('\n');
    setText(reversedLines);
    toast.success('Lines reversed successfully!');
  };

  const handleReverseWord = () => {

    const words = text.split(/\s+/);
    const nonEmptyWords = words.filter(word => word.length > 0);
    const reversedWords = [...nonEmptyWords].reverse().join(' ');

    setText(reversedWords);
    toast.success('Words reversed successfully!');
  };

  const handleReverseSentence = () => {

    const sentences = text.split(/([.!?])\s+/);
    
    const reconstructed = [];
    for (let i = 0; i < sentences.length; i += 2) {
      if (sentences[i]) {
        reconstructed.push(
          sentences[i] + (sentences[i + 1] ? sentences[i + 1] : '')
        );
      }
    }
    const reversedSentences = [...reconstructed].reverse().join(' ');
    setText(reversedSentences);
    toast.success('Sentences reversed successfully!');
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
                Text Reversal
            </button>

            <button disabled={text.length === 0} onClick={handleReverseLine} type="button" className="btn btn-warning btn-sm me-2"><i className="ri-timeline-view"></i> Reverse Line</button>
            <button disabled={text.length === 0} onClick={handleReverseWord} type="button" className="btn btn-warning btn-sm me-2">Reverse Word</button>
            <button disabled={text.length === 0} onClick={handleReverseSentence} type="button" className="btn btn-warning btn-sm me-2">Reverse Sentence</button>
    </div>
  )
}

export default Text_Reversal