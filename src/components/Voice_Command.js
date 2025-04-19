import React from 'react'

function Voice_Command() {
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
                Voice Command
            </button>

            <button type="button" className="btn btn-primary btn-sm me-2"><i className="ri-speak-ai-fill"></i> Talk to Type</button>
            <button type="button" className="btn btn-primary btn-sm me-2"><i className="ri-command-fill"></i> Say Commands</button>
    </div>
  )
}

export default Voice_Command
