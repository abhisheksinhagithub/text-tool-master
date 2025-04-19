import React from 'react'

function Text_to_Speech() {
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
                Text to Speech
            </button>
    </div>
  )
}

export default Text_to_Speech