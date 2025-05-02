import React from 'react';

export default function About(props) {

    const accordionHeaderBg = props.mode === 'dark' ? '#0d0c0c' : '#343a40';
    const accordionBodyBg = props.mode === 'dark' ? 'rgb(20,20,20)' : 'white';

    const textColor = props.mode === 'dark' ? 'white' : 'black';
    const borderColor = props.mode === 'dark' ? 'white' : 'black';

    const bgClr = props.mode === 'dark' ? '#212529' : '#f8f9fa';



    return (
        <div className="container my-4 rounded pt-1 pb-3" style={{ backgroundColor: bgClr}}>

            <p className="mb-3 text-center fs-3">Text-Tool-Master</p>

            <div className="accordion" id="aboutAccordion">

                {/* Accordion Item 1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            Analyze and Transform Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Easily transform your text with operations like converting to uppercase, lowercase, title case, sentence case, removing extra spaces, specific words, characters, and even reversing lines, words, or sentences.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            Secure Text Encryption & Decryption
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Keep your text safe with encryption using your own custom key. Decrypt it anytime easily with the correct key, ensuring your content stays secure and private.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fs-5 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            Voice Commands and Text-to-Speech
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Operate your text hands-free! Use voice typing to add content or keyboard shortcuts for faster actions. Also, listen to your text with the built-in Text-to-Speech feature supporting multiple voices.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed fs-5 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            Character Limit Controls and Statistics
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Set character limits with real-time progress bars and alerts. Instantly view word count, character count, sentence count, and estimated reading time — ideal for writers, bloggers, and students.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                        <button className="accordion-button collapsed fs-5 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            Export and Download Options
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Easily export your text as a TXT, PDF, or DOCX file with just one click — all fully browser-compatible, working smoothly on Chrome, Firefox, Safari, Edge, and Opera.
                        </div>
                    </div>
                </div>

                {/* Accordion Item 6 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed fs-5 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{
                            outline: 'none',
                            boxShadow: 'none',
                            border: `1px solid ${borderColor}`,
                            transition: 'border-color 0.15s ease-in-out',
                            color: 'white',
                            backgroundColor: accordionHeaderBg
                        }}>
                            100% Free and Open for All
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#aboutAccordion">
                        <div className="accordion-body fs-6" style={{ backgroundColor: accordionBodyBg, color: textColor }}>
                            Text-Tool-Master is completely free to use — no login, no payments, no hidden charges. Built with React.js, Bootstrap, and lots of passion for users like you!
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
