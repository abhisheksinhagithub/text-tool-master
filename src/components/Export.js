import React from 'react'

function Export() {
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
                Export Options
            </button>

            <button type="button" className="btn btn-success btn-sm me-2"><i className="ri-export-fill"></i> Export as TXT</button>
            <button type="button" className="btn btn-primary btn-sm me-2"><i className="ri-export-fill"></i> Export as PDF</button>
            <button type="button" className="btn btn-warning btn-sm me-2"><i className="ri-export-fill"></i> Export as DOC</button>

            
    </div>
  )
}

export default Export
