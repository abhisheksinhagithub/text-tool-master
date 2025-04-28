import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Find_and_Replace({ text, setText, mode }) {

    const inputColor = mode === 'dark' ? 'rgb(20, 20, 20)' : 'white';
    const textColor = mode === 'dark' ? 'white' : 'black';

    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    const handleFindReplace = () => {
        // Edge Case 1: Empty find field
        if (!findText.trim()) {
            toast.error('Please enter text to find') 
            return;
        }

        // Edge Case 2: Empty replace field
        if (!replaceText.trim()) {
            toast.error('Please enter replacement text')
            return;
        }

        // Edge Case 3: No matches found
        if (!text.includes(findText)) {
            toast.error(`"${findText}" not found in text`)  
            return;
        }

        // Edge Case 4: Same find/replace text
        if (findText === replaceText) {
            toast.info('No changes made')
            return;
        }

        // Main replacement logic
        const newText = text.replace(new RegExp(escapeRegExp(findText), 'g'), replaceText);
        setText(newText);
        toast.success(`Replaced "${findText}" with "${replaceText}"`)

        // Helper to escape special regex characters
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
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
                Find & Replace
            </button>

            <div className="d-flex align-items-center gap-2">
                {/* Find Input */}
                <div className="col-md-3">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" style={{
                            backgroundColor: '#673ab7',
                            color: 'white',
                            border: '1px solid #673ab7'
                        }}>Find</span>
                        <input
                            type="text"
                            className="form-control form-control-sm custom-textarea"
                            placeholder="Text to find"
                            value={findText}
                            onChange={(e) => setFindText(e.target.value)}
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
                </div>

                {/* Replace Input */}
                <div className="col-md-3">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" style={{
                            backgroundColor: '#673ab7',
                            color: 'white',
                            border: '1px solid #673ab7'
                        }}>Replace</span>
                        <input
                            type="text"
                            className="form-control form-control-sm custom-textarea"
                            placeholder="Replacement text"
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
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
                </div>

                {/* Action Button */}
                <div className="col-md-2">
                    <button
                        disabled={text.length === 0 || findText.length === 0 || replaceText.length === 0}
                        onClick={handleFindReplace}
                        type="button"
                        className="btn btn-danger btn-sm"

                    >
                        <i className="ri-find-replace-fill"></i> Replace All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Find_and_Replace