import React from 'react'

function Text_Reversal() {
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
                Text Reversal
            </button>

            <button type="button" className="btn btn-warning btn-sm me-2"><i className="ri-timeline-view"></i> Reverse Line</button>
            <button type="button" className="btn btn-warning btn-sm me-2">Reverse Word</button>
            <button type="button" className="btn btn-warning btn-sm me-2">Reverse Sentence</button>
    </div>
  )
}

export default Text_Reversal