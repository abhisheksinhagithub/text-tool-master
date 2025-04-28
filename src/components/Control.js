import React from 'react';
import { Link } from 'react-router-dom';

export default function Control({ mode }) {
    const accordionHeaderBg = mode === 'dark' ? '#0d0c0c' : '#343a40';
    const accordionBodyBg = mode === 'dark' ? 'rgb(20,20,20)' : 'white';
    const textColor = mode === 'dark' ? 'white' : 'black';
    const borderColor = mode === 'dark' ? 'white' : 'black';
    const bgClr = mode === 'dark' ? '#212529' : '#f8f9fa';

    return (
        <div className="container my-4 rounded pt-1 pb-3" style={{ backgroundColor: bgClr }}>
            <p className="mb-3 text-center fs-3">Voice Controls</p>

            <div className="accordion" id="controlsAccordion">

                {/* Accordion Item 1 - Read Aloud */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="readAloudHeading">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#readAloudCollapse" 
                            aria-expanded="true" aria-controls="readAloudCollapse" 
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            <i className="ri-volume-up-line me-2"></i> Read Aloud Feature
                        </button>
                    </h2>
                    <div id="readAloudCollapse" className="accordion-collapse collapse show" 
                        aria-labelledby="readAloudHeading" data-bs-parent="#controlsAccordion">
                        <div className="accordion-body fs-6" 
                            style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <p>
                                The <strong>Read Aloud</strong> feature converts your text to speech using your browser's built-in text-to-speech capabilities.
                            </p>
                            <ul>
                                <li>Click the <strong>"Read Aloud"</strong> button to have your text spoken</li>
                                <li>Click <strong>"Stop"</strong> to pause the reading</li>
                                <li>Select different voices from the dropdown menu (if available)</li>
                                <li>The feature works best in Chrome, Edge, and Safari</li>
                                <li>Requires text to be present in the input area</li>
                            </ul>
                            <p className="mb-0">
                                <i className="ri-information-line"></i> Note: Voice availability depends on your operating system and browser.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 2 - Talk to Type */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="talkToTypeHeading">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#talkToTypeCollapse" 
                            aria-expanded="false" aria-controls="talkToTypeCollapse" 
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            <i className="ri-mic-line me-2"></i> Talk to Type Feature
                        </button>
                    </h2>
                    <div id="talkToTypeCollapse" className="accordion-collapse collapse" 
                        aria-labelledby="talkToTypeHeading" data-bs-parent="#controlsAccordion">
                        <div className="accordion-body fs-6" 
                            style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <p>
                                The <strong>Talk to Type</strong> feature allows you to dictate text using your microphone.
                            </p>
                            <ul>
                                <li>Click <strong>"Talk to Type"</strong> to start voice recognition</li>
                                <li>Speak clearly into your microphone</li>
                                <li>Click <strong>"Stop"</strong> when finished</li>
                                <li>Your spoken words will appear in the text area</li>
                                <li>Works best in Chrome and Edge browsers</li>
                            </ul>
                            <div className="alert alert-info mt-3" role="alert">
                                <i className="ri-lightbulb-flash-line"></i> Tips for better results:
                                <ul className="mt-2">
                                    <li>Use a good quality microphone</li>
                                    <li>Speak in a quiet environment</li>
                                    <li>Speak at a normal pace and volume</li>
                                    <li>Check your microphone permissions if it's not working</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordion Item 3 - Keyboard Shortcuts */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="shortcutsHeading">
                        <button className="accordion-button collapsed fs-5" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#shortcutsCollapse" 
                            aria-expanded="false" aria-controls="shortcutsCollapse" 
                            style={{
                                outline: 'none',
                                boxShadow: 'none',
                                border: `1px solid ${borderColor}`,
                                transition: 'border-color 0.15s ease-in-out',
                                color: 'white',
                                backgroundColor: accordionHeaderBg
                            }}>
                            <i className="ri-keyboard-line me-2"></i> Keyboard Shortcuts
                        </button>
                    </h2>
                    <div id="shortcutsCollapse" className="accordion-collapse collapse" 
                        aria-labelledby="shortcutsHeading" data-bs-parent="#controlsAccordion">
                        <div className="accordion-body fs-6" 
                            style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            <p>
                                The app supports various keyboard shortcuts for quick text manipulation.
                            </p>
                            <ul>
                                <li>First enable shortcuts using the <strong>Shortcuts</strong> button</li>
                                <li>Use <strong>Ctrl + key</strong> combinations for basic operations</li>
                                <li>Use <strong>Ctrl + Shift + key</strong> for case conversion</li>
                                <li>Use <strong>Ctrl + Alt + key</strong> for text reversal</li>
                            </ul>
                            <p className="mb-0">
                                Visit the <Link to="/shortcuts" className="text-decoration-none">Shortcuts page</Link> for complete details on all available shortcuts.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}