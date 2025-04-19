import React from 'react'

function Find_and_Replace() {
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
