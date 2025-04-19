import React from 'react'

function Basic_Op() {
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
                Basic Text Operations
            </button>

            <button type="button" className="btn btn-primary btn-sm me-2">Convert to UpperCase</button>
            <button type="button" className="btn btn-primary btn-sm me-2">Convert to LowerCase</button>
            <button type="button" className="btn btn-primary btn-sm me-2"> <i className="ri-clipboard-fill"></i> Copy Text</button>
            <button type="button" className="btn btn-primary btn-sm me-2"><i className="ri-eraser-fill"></i> Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary btn-sm me-2"><i className="ri-delete-bin-fill"></i> Clear Text</button>
    </div>
  )
}

export default Basic_Op
