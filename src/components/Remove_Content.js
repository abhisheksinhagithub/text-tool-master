import React from 'react'

function Remove_Content() {
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
                >
                    Remove Char
                </button>
            </div>
    </div>
  )
}

export default Remove_Content
