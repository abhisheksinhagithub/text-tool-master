import React, { useState } from 'react'

function Find_and_Replace({ text, setText }) {

    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');

    const handleFindReplace = () => {
        // Edge Case 1: Empty find field
        if (!findText.trim()) {
            alert('Please enter text to find', 'warning');
            return;
        }

        // Edge Case 2: Empty replace field
        if (!replaceText.trim()) {
            alert('Please enter replacement text', 'warning');
            return;
        }

        // Edge Case 3: No matches found
        if (!text.includes(findText)) {
            alert(`"${findText}" not found in text`, 'danger');
            return;
        }

        // Edge Case 4: Same find/replace text
        if (findText === replaceText) {
            alert('Find and replace texts are identical', 'info');
            return;
        }

        // Main replacement logic
        const newText = text.replace(new RegExp(escapeRegExp(findText), 'g'), replaceText);
        setText(newText);
        alert(`Replaced "${findText}" with "${replaceText}"`, 'success');

        // Helper to escape special regex characters
        function escapeRegExp(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
    };


    return (
        <div>
            <button className="btn btn-sm mt-3 mb-2 d-block"
                style={{
                    backgroundColor: '#34004a',
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
                            className="form-control form-control-sm"
                            placeholder="Text to find"
                            value={findText}
                            onChange={(e) => setFindText(e.target.value)}
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: '1px solid #673ab7',
                                transition: 'border-color 0.15s ease-in-out'
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
                            className="form-control form-control-sm"
                            placeholder="Replacement text"
                            value={replaceText}
                            onChange={(e) => setReplaceText(e.target.value)}
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: '1px solid #673ab7',
                                transition: 'border-color 0.15s ease-in-out'
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