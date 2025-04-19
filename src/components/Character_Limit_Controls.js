import React, { useState, useEffect, useRef } from 'react';

function Character_Limit_Controls({ text, setText }) {
    
    const [charLimit, setCharLimit] = useState(0);
    const [isLimitEnabled, setIsLimitEnabled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [isExceeded, setIsExceeded] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (isLimitEnabled && charLimit > 0) {
            const currentLength = text.length;
            const percentage = Math.min((currentLength / charLimit) * 100, 100);
            setProgress(percentage);
            setIsExceeded(currentLength > charLimit);
        } else {
            setProgress(text.length > 0 ? 100 : 0);
            setIsExceeded(false);
        }
    }, [text, charLimit, isLimitEnabled]);


    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const setLimit = () => {
        const limit = parseInt(inputValue);
        if (!isNaN(limit) && limit > 0) {
            setCharLimit(limit);
            setIsLimitEnabled(true);
            if (text.length > limit) {
                setText(text.substring(0, limit));
                setIsExceeded(true);
            }
        }
    };

    const removeLimit = () => {
        setCharLimit(0);
        setIsLimitEnabled(false);
        setInputValue('');
        setIsExceeded(false);
        inputRef.current?.focus();
    };

    const getProgressBarColor = () => {
        if (isExceeded) return 'bg-danger';
        if (!isLimitEnabled) return 'bg-primary';
        if (progress >= 90) return 'bg-warning';
        return 'bg-success';
    };

    const getProgressBarText = () => {
        if (isLimitEnabled) {
            return isExceeded
                ? `Limit exceeded by ${text.length - charLimit} characters!`
                : `${text.length}/${charLimit}`;
        }
        return `${text.length} characters (no limit)`;
    };

    return (
        <div>
            <button
                className="btn btn-sm mt-3 mb-2 d-block"
                style={{
                    backgroundColor: '#34004a',
                    color: 'white',
                    pointerEvents: 'none',
                    cursor: 'default'
                }}
            >
                Character Limit Controls
            </button>

            <div className="d-flex align-items-center">
                <div className="input-group me-1" style={{ width: '250px' }}>
                    <input
                        ref={inputRef}
                        type="number"
                        min="1"
                        className="form-control form-control-sm"
                        placeholder="Set Character Limit"
                        value={inputValue}
                        onChange={handleInputChange}
                        disabled={isLimitEnabled}
                        aria-label="Character limit input"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${isLimitEnabled ? '#6c757d' : '#673ab7'}`,
                            backgroundColor: isLimitEnabled ? '#e9ecef' : 'white',
                            transition: 'all 0.3s ease'
                        }}
                    />
                </div>

                <button
                    className="btn btn-success btn-sm me-2"
                    onClick={setLimit}
                    disabled={!inputValue || isLimitEnabled}
                    aria-label="Set character limit"
                    style={{
                        opacity: isLimitEnabled ? 0.6 : 1,
                        cursor: isLimitEnabled ? 'not-allowed' : 'pointer'
                    }}
                >
                    <i className="ri-sort-number-desc"></i> Set Limit
                </button>

                <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={removeLimit}
                    disabled={!isLimitEnabled}
                    aria-label="Remove character limit"
                    style={{
                        opacity: !isLimitEnabled ? 0.6 : 1,
                        cursor: !isLimitEnabled ? 'not-allowed' : 'pointer'
                    }}
                >
                    <i className="ri-close-circle-fill"></i> Remove
                </button>

                <div className="flex-grow-1">
                    <div className="progress" style={{ height: '24px', width: '350px', position: 'relative' }}>
                        <div
                            className={`progress-bar ${getProgressBarColor()} text-white`}
                            role="progressbar"
                            style={{
                                width: `${isLimitEnabled ? Math.min(progress, 100) : 100}%`,
                                transition: 'all 0.3s ease',
                                overflow: 'visible',
                                whiteSpace: 'nowrap'
                            }}
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            <span style={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontWeight: isExceeded ? 'bold' : 'normal',
                                textShadow: '0 0 2px rgba(0,0,0,0.5)'
                            }}>
                                {getProgressBarText()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {isExceeded && (
                <div className="text-danger mt-2">
                    <i className="ri-error-warning-fill"></i> You've exceeded the character limit! 
                    Please shorten your text.
                </div>
            )}
        </div>
    );
}

export default Character_Limit_Controls;
