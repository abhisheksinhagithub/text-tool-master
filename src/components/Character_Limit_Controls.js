import React from 'react'

function Character_Limit_Controls() {
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
                Character Limit Controls
            </button>


            <div className="d-flex align-items-center">
                {/* Key Input */}
                <div className="input-group me-1" style={{ width: '250px' }}>
                    <input
                        type="number"
                        className="form-control form-control-sm"
                        placeholder="Set Character Limit"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />
                </div>

                <button
                    className="btn btn-success btn-sm me-2"

                >
                    <i className="ri-sort-number-desc"></i> Set Limit
                </button>

                <button
                    className="btn btn-danger btn-sm me-2"

                >
                    <i className="ri-close-circle-fill"></i> Remove
                </button>

                <div className="flex-grow-1">
                    <div className="progress" style={{ height: '20px', width: '350px' }}>
                        <div
                            className='bg-danger'

                            style={{
                                transition: 'all 0.3s ease'
                            }}
                        >

                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Character_Limit_Controls
