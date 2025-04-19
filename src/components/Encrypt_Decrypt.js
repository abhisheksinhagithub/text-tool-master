import React from 'react'

function Encrypt_Decrypt() {
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
                Encryption & Decryption
            </button>


            <div className="d-flex align-items-center">
                {/* Key Input */}
                <div className="input-group me-1" style={{ width: '410px' }}>
                    <input
                        type="password"
                        className="form-control form-control-sm"
                        placeholder="Encryption Key"
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />
                </div>

                <button
                    className="btn btn-primary btn-sm me-2"

                >
                    <i className="ri-folder-keyhole-line"></i> Encrypt
                </button>

                <button
                    className="btn btn-success btn-sm me-2"

                >
                    <i className="ri-folder-keyhole-fill"></i> Decrypt
                </button>
            </div>
    </div>
  )
}

export default Encrypt_Decrypt
