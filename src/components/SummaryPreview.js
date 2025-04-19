import React from 'react'

function SummaryPreview(props) {
    return (
        <div className='container my-3'>

            <div className='text-center mb-3 fs-3'>{props.heading}</div>

            <div className="d-flex align-items-center">

                <div className="input-group me-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Number of words"
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />

                    <button
                        className="btn btn-danger btn-sm"
                        style={{
                            pointerEvents: 'none',
                            cursor: 'default'
                        }}

                    >
                        Words
                    </button>
                </div>




                <div className="input-group me-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        maxLength={1}
                        className="form-control form-control-sm"
                        placeholder="Number of characters"
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />

                    <button
                        className="btn btn-danger btn-sm"
                        style={{
                            pointerEvents: 'none',
                            cursor: 'default'
                        }}
                    >
                        Characters
                    </button>

                </div>

                <div className="input-group me-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        maxLength={1}
                        className="form-control form-control-sm"
                        placeholder="Number of sentences"
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />

                    <button
                        className="btn btn-danger btn-sm"
                        style={{
                            pointerEvents: 'none',
                            cursor: 'default'
                        }}
                    >
                        Sentences
                    </button>

                </div>

                <div className="input-group me-2" style={{ width: '300px' }}>
                    <input
                        type="text"
                        maxLength={1}
                        className="form-control form-control-sm"
                        placeholder="Minutes to read"
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid #673ab7',
                            transition: 'border-color 0.15s ease-in-out'
                        }}
                    />

                    <button
                        className="btn btn-danger btn-sm"
                        style={{
                            pointerEvents: 'none',
                            cursor: 'default'
                        }}
                    >
                        Minutes to read
                    </button>

                </div>
            </div>


            <button className="btn btn-sm mt-3 mb-2 d-block"
                style={{
                    backgroundColor: '#34004a',
                    color: 'white',
                    pointerEvents: 'none',
                    cursor: 'default'
                }}
            >
                Preview
            </button>
            <p className='fs-6'>"Nothing to Preview !"</p>
        </div>
    )
}

export default SummaryPreview