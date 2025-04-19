import React from 'react'

function Password() {
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
                Password Generator
            </button>


            <div className="d-flex align-items-center flex-wrap">
                {/* Range Input - Made compact */}
                <div className="me-3" style={{ minWidth: "150px" }}>
                    <label className="form-label small mb-1 d-block">Length:</label>
                    <div className="d-flex align-items-center">
                        <input
                            type="range"
                            className="form-range"
                            min="6"
                            max="32"
                            step="1"
                            defaultValue="12"
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
                        />
                        <label className="form-check-label small" htmlFor="uppercaseCheck" style={{ color: '#34004a' }}>
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
                        />
                        <label className="form-check-label small" htmlFor="lowercaseCheck" style={{ color: '#34004a' }}>
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
                        />
                        <label className="form-check-label small" htmlFor="numbersCheck" style={{ color: '#34004a' }}>
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
                        />
                        <label className="form-check-label small" htmlFor="symbolsCheck" style={{ color: '#34004a' }}>
                            Symbols (!@#$)
                        </label>
                    </div>
                </div>

                <button type="button" className="btn btn-sm mt-4 me-2" style={{
                    backgroundColor: '#673ab7',
                    color: 'white'
                }}> <i className="ri-lock-password-fill"></i> Generate Password</button>

                <button type="button" className="btn btn-sm mt-4 me-2" style={{
                    backgroundColor: '#673ab7',
                    color: 'white'
                }}>Copy Password</button>

            </div>
    </div>
  )
}

export default Password
