import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Remove_Content({ text, setText, mode }) {

    const inputColor = mode === 'dark' ? 'rgb(20, 20, 20)' : 'white';
    const textColor = mode === 'dark' ? 'white' : 'black';

    const [wordToRemove, setWordToRemove] = useState('');
    const [charToRemove, setCharToRemove] = useState('');

    const handleRemoveWord = () => {
        if (!wordToRemove.trim()) {
            toast.error('Please enter a word to remove');
            return;
        }

        const regex = new RegExp(`\\b${wordToRemove}\\b`, 'g');

        if (!text.match(regex)) {
            toast.error(`"${wordToRemove}" not found`);
            return;
        }

        const newText = text.replace(regex, '').replace(/\s+/g, ' ').trim();

        setText(newText);
        toast.success(`Removed "${wordToRemove}"`);
        setWordToRemove('');
    }


    const handleRemoveChar = () => {
        // Empty input check
        if (!charToRemove) {
            toast.error('Please enter a character to remove');
            return;
        }

        // Character not found check (case-sensitive)
        if (!text.includes(charToRemove)) {
            toast.error(`"${charToRemove}" not found`);
            return;
        }

        // Perform removal
        const newText = text.split(charToRemove).join('');
        setText(newText);
        toast.success(`Removed all "${charToRemove}" characters`);
        setCharToRemove(''); // Clear input
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
                Remove Content
            </button>

            <div className="d-flex align-items-center">
                {/* Word Removal */}
                <div className="input-group me-1" style={{ width: '300px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm custom-textarea"
                        placeholder="Enter word to remove"
                        value={wordToRemove}
                        onChange={(e) => setWordToRemove(e.target.value)}
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />
                </div>

                <button
                    className="btn btn-danger btn-sm me-3"
                    onClick={handleRemoveWord}
                    disabled={!wordToRemove.trim() || !text.trim()}

                >
                    Remove Word
                </button>

                {/* Character Removal */}
                <div className="input-group me-1" style={{ width: '225px' }}>
                    <input
                        type="text"
                        maxLength={1}
                        className="form-control form-control-sm custom-textarea"
                        placeholder="Remove character"
                        value={charToRemove}
                        onChange={(e) => setCharToRemove(e.target.value)}
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />

                </div>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={handleRemoveChar}
                    disabled={!charToRemove || !text.trim()}
                >
                    Remove Char
                </button>
            </div>
        </div>
    )
}

export default Remove_Content