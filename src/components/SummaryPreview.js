import React from 'react';

function SummaryPreview(props) {
    const text = props.text || "";
    const backgroundColor = props.mode === 'dark' ? '#212529' : '#f8f9fa';
    const inputColor = props.mode === 'dark' ? 'rgb(20, 20, 20)' : 'white';
    const textColor = props.mode === 'dark' ? 'white' : 'black';


    // Calculations
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    const readingTime = (0.008 * text.split(" ").filter(word => word.length > 0).length).toFixed(2);

    return (
        <div className='container my-3 rounded' style={{ backgroundColor: backgroundColor }}>
            <div className='text-center mb-3 fs-3'>{props.heading}</div>

            <div className="d-flex align-items-center flex-wrap">
                {/* Words */}
                <div className="input-group me-2 mb-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        value={words}
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid Tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />
                    <button className="btn btn-danger btn-sm" style={{
                        pointerEvents: 'none',
                        cursor: 'default'
                    }}>Words</button>
                </div>

                {/* Characters */}
                <div className="input-group me-2 mb-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        value={characters}
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid Tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />
                    <button className="btn btn-danger btn-sm" style={{
                        pointerEvents: 'none',
                        cursor: 'default'
                    }}>Characters</button>
                </div>

                {/* Sentences */}
                <div className="input-group me-2 mb-2" style={{ width: '250px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        value={sentences}
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid Tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />
                    <button className="btn btn-danger btn-sm" style={{
                        pointerEvents: 'none',
                        cursor: 'default'
                    }}>Sentences</button>
                </div>

                {/* Minutes to read */}
                <div className="input-group me-2 mb-2" style={{ width: '300px' }}>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        value={readingTime}
                        readOnly
                        style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: '1px solid Tomato',
                            transition: 'border-color 0.15s ease-in-out',
                            backgroundColor: inputColor,
                            color: textColor
                        }}
                    />
                    <button className="btn btn-danger btn-sm" style={{
                        pointerEvents: 'none',
                        cursor: 'default'
                    }}>Minutes to read</button>
                </div>
            </div>

            <button className="btn btn-sm mt-3 mb-2 d-block"
                style={{
                    // backgroundColor: '#34004a',
                    backgroundColor: 'Tomato',
                    color: 'white',
                    pointerEvents: 'none',
                    cursor: 'default'
                }}
            >
                Preview
            </button>

            <p className='fs-6 pb-2'>{text.length > 0 ? text : "Nothing to Preview !"}</p>
        </div>
    )
}

export default SummaryPreview;
