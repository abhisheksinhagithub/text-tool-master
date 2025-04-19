import React, {useState} from 'react'

function Remove_Content({ text, setText }) {

    const [wordToRemove, setWordToRemove] = useState('');
    const [charToRemove, setCharToRemove] = useState('');

    const handleRemoveWord = () => {
        if (!wordToRemove.trim()) {
            alert('Please enter a word to remove', 'warning');
            return;
        }

        const regex = new RegExp(`\\b${wordToRemove}\\b`, 'g');

        if (!text.match(regex)) {
            alert(`No matches found for "${wordToRemove}"`, 'danger');
            return;
        }

        const newText = text.replace(regex, '').replace(/\s+/g, ' ').trim();

        setText(newText);
        alert(`Removed "${wordToRemove}"`, 'success');
        setWordToRemove('');
    }


    const handleRemoveChar = () => {
        // Empty input check
        if (!charToRemove) {
            alert('Please enter a character', 'warning');
            return;
        }

        // Character not found check (case-sensitive)
        if (!text.includes(charToRemove)) {
            alert(`"${charToRemove}" not found`, 'danger');
            return;
        }

        // Perform removal
        const newText = text.split(charToRemove).join('');
        setText(newText);
        alert(`Removed all "${charToRemove}" characters`, 'success');
        setCharToRemove(''); // Clear input
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
                Remove Content
            </button>

            <div className="d-flex align-items-center">
                {/* Word Removal */}
                <div className="input-group me-1" style={{ width: '300px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter word to remove"
                        value={wordToRemove}
                        onChange={(e) => setWordToRemove(e.target.value)}
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
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
                        className="form-control form-control-sm"
                        placeholder="Remove character"
                        value={charToRemove}
                        onChange={(e) => setCharToRemove(e.target.value)}
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
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