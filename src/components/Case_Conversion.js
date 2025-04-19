import React from 'react'

function Case_Conversion() {
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
                Case Conversion
            </button>

            <button type="button" className="btn btn-success btn-sm me-2">Title Case</button>
            <button type="button" className="btn btn-success btn-sm me-2">Sentence Case</button>
            <button type="button" className="btn btn-success btn-sm me-2">Toggle Case</button>
    </div>
  )
}

export default Case_Conversion