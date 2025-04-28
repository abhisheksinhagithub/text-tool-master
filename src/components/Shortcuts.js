import React from 'react';

export default function Shortcuts(props) {
    const accordionHeaderBg = props.mode === 'dark' ? '#0d0c0c' : '#343a40';
    const accordionBodyBg = props.mode === 'dark' ? 'rgb(20,20,20)' : 'white';
    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const borderColor = props.mode === 'dark' ? 'white' : 'black';
    const bgClr = props.mode === 'dark' ? '#212529' : '#f8f9fa';

    return (
        <div className="container my-4 rounded pt-1 pb-3" style={{ backgroundColor: bgClr }}>
            <p className="mb-3 text-center fs-3">Keyboard Shortcuts</p>

            <div className="accordion" id="shortcutsAccordion">

                {/* Accordion Item 1 - Basic Text Operations (expanded by default) */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutHeadingOne">
                        <button className="accordion-button fs-5" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#shortcutCollapseOne" aria-expanded="true" 
                            aria-controls="shortcutCollapseOne" style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            Basic Text Operations (Ctrl + Key)
                        </button>
                    </h2>
                    <div id="shortcutCollapseOne" className="accordion-collapse collapse show" 
                        aria-labelledby="shortcutHeadingOne" data-bs-parent="#shortcutsAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <ul>
                                <li><strong>Ctrl + U:</strong> Convert text to UPPERCASE </li>
                                <li><strong>Ctrl + L:</strong> Convert text to lowercase </li>
                                <li><strong>Ctrl + C:</strong> Copy text to clipboard </li>
                                <li><strong>Ctrl + X:</strong> Clear all text </li>
                                <li><strong>Ctrl + S:</strong> Remove extra spaces </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 2 - Case Conversion */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutHeadingTwo">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#shortcutCollapseTwo" 
                            aria-expanded="false" aria-controls="shortcutCollapseTwo" style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            Case Conversion (Ctrl + Shift + Key)
                        </button>
                    </h2>
                    <div id="shortcutCollapseTwo" className="accordion-collapse collapse" 
                        aria-labelledby="shortcutHeadingTwo" data-bs-parent="#shortcutsAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <ul>
                                <li><strong>Ctrl + Shift + I:</strong> Convert to Title Case </li>
                                <li><strong>Ctrl + Shift + E:</strong> Convert to Sentence case </li>
                                <li><strong>Ctrl + Shift + G:</strong> Toggle Case (swap upper/lower) </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 3 - Text Reversal */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutHeadingThree">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#shortcutCollapseThree" 
                            aria-expanded="false" aria-controls="shortcutCollapseThree" style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            Text Reversal (Ctrl + Alt + Key)
                        </button>
                    </h2>
                    <div id="shortcutCollapseThree" className="accordion-collapse collapse" 
                        aria-labelledby="shortcutHeadingThree" data-bs-parent="#shortcutsAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <ul>
                                <li><strong>Ctrl + Alt + L:</strong> Reverse lines order </li>
                                <li><strong>Ctrl + Alt + W:</strong> Reverse words order </li>
                                <li><strong>Ctrl + Alt + Z:</strong> Reverse sentences order </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 4 - Export Operations */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutHeadingFour">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#shortcutCollapseFour" 
                            aria-expanded="false" aria-controls="shortcutCollapseFour" style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            Export Operations (Ctrl + Key)
                        </button>
                    </h2>
                    <div id="shortcutCollapseFour" className="accordion-collapse collapse" 
                        aria-labelledby="shortcutHeadingFour" data-bs-parent="#shortcutsAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <ul>
                                <li><strong>Ctrl + 1:</strong> Export as TXT file </li>
                                <li><strong>Ctrl + 2:</strong> Export as PDF file </li>
                                <li><strong>Ctrl + 3:</strong> Export as DOCX file </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 5 - Miscellaneous */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutHeadingFive">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#shortcutCollapseFive" 
                            aria-expanded="false" aria-controls="shortcutCollapseFive" style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            Important Notes & Miscellaneous
                        </button>
                    </h2>
                    <div id="shortcutCollapseFive" className="accordion-collapse collapse" 
                        aria-labelledby="shortcutHeadingFive" data-bs-parent="#shortcutsAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <ul>
                                <li><strong>Shortcuts must be enabled:</strong> Toggle via the Shortcuts button</li>
                                <li><strong>Ctrl key:</strong> Must be pressed first before other keys</li>
                                <li><strong>Text operations:</strong> Most require text to be present, except for password generation</li>
                                <li><strong>Visual Feedback:</strong> Success/error messages and active operation states are displayed</li>
                                <li><strong>No Conflict Shortcuts:</strong> Avoids browser default shortcuts (e.g., Ctrl + S for save)</li>
                                <li><strong>Special Cases:</strong> Export functions generate downloadable files</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}