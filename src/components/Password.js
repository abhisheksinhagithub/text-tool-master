import React, { useState } from 'react'

function Password({ setText }) {
    
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(12);

    const [passwordOptions, setPasswordOptions] = useState({

        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });


    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let availableChars = '';
        if (passwordOptions.uppercase) availableChars += uppercaseChars;
        if (passwordOptions.lowercase) availableChars += lowercaseChars;
        if (passwordOptions.numbers) availableChars += numberChars;
        if (passwordOptions.symbols) availableChars += symbolChars;

        if (!availableChars) {
            alert('Please select at least one character type', 'warning');
            return;
        }

        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length);
            generatedPassword += availableChars[randomIndex];
        }

        setPassword(generatedPassword);
        setText(generatedPassword); // Optional: auto-fill the main text area
        alert('Password generated!', 'success');
    };

    const copyPassword = () => {
        if (!password) {
            alert('No password to copy', 'warning');
            return;
        }
        navigator.clipboard.writeText(password);
        alert('Password copied to clipboard!', 'success');
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
                Password Generator
            </button>


            <div className="d-flex align-items-center flex-wrap">
                {/* Range Input - Made compact */}
                <div className="me-3" style={{ minWidth: "150px" }}>
                    <label className="form-label small mb-1 d-block">Length:{passwordLength}</label>
                    <div className="d-flex align-items-center">
                        <input
                            type="range"
                            className="form-range"
                            min="6"
                            max="32"
                            step="1"
                            value={passwordLength}
                            onChange={(e) => setPasswordLength(e.target.value)}
                        />
                    </div>
                </div>

                {/* Checkboxes - Uniform small styling */}
                <div className="d-flex flex-wrap mt-4">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="uppercaseCheck"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: '#673ab7',
                                transition: 'border-color 0.15s ease-in-out'
                            }}

                            checked={passwordOptions.uppercase}
                            onChange={() => setPasswordOptions({ ...passwordOptions, uppercase: !passwordOptions.uppercase })}
                        />
                        <label className="form-check-label small" htmlFor="uppercaseCheck" style={{ color: '#ff7e00' }}>
                            Uppercase (A-Z)
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="lowercaseCheck"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: '#673ab7',
                                transition: 'border-color 0.15s ease-in-out'
                            }}

                            checked={passwordOptions.lowercase}
                            onChange={() => setPasswordOptions({ ...passwordOptions, lowercase: !passwordOptions.lowercase })}
                        />
                        <label className="form-check-label small" htmlFor="lowercaseCheck" style={{ color: '#ff7e00' }}>
                            Lowercase (a-z)
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="numbersCheck"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: '#673ab7',
                                transition: 'border-color 0.15s ease-in-out'
                            }}

                            checked={passwordOptions.numbers}
                            onChange={() => setPasswordOptions({ ...passwordOptions, numbers: !passwordOptions.numbers })}
                        />
                        <label className="form-check-label small" htmlFor="numbersCheck" style={{ color: '#ff7e00' }}>
                            Numbers (0-9)
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="symbolsCheck"
                            style={{
                                outline: 'none',
                                border: 'none',
                                boxShadow: 'none',
                                backgroundColor: '#673ab7',
                                transition: 'border-color 0.15s ease-in-out'
                            }}
                            checked={passwordOptions.symbols}
                            onChange={() => setPasswordOptions({ ...passwordOptions, symbols: !passwordOptions.symbols })}
                        />
                        <label className="form-check-label small" htmlFor="symbolsCheck" style={{ color: '#ff7e00' }}>
                            Symbols (!@#$)
                        </label>
                    </div>
                </div>

                <button onClick={generatePassword} type="button" className="btn btn-sm mt-4 me-2" style={{
                    backgroundColor: '#673ab7',
                    color: 'white'
                }}> <i className="ri-lock-password-fill"></i> Generate Password</button>

                <button onClick={copyPassword} type="button" className="btn btn-sm mt-4 me-2" style={{
                    backgroundColor: '#673ab7',
                    color: 'white'
                }}>Copy Password</button>

            </div>
        </div>
    )
}

export default Password
