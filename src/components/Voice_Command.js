import React, { useState, useRef, useEffect } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { Document, Paragraph, Packer, TextRun } from 'docx';
import { toast } from 'react-toastify';

function Voice_Command({ setText, text }) {
  const [isListening, setIsListening] = useState(false);
  const [shortcutsEnabled, setShortcutsEnabled] = useState(false);
  const recognitionRef = useRef(null);


  // Keyboard shortcuts handler
  useEffect(() => {
    if (shortcutsEnabled) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcutsEnabled]);

  const handleKeyDown = (e) => {
    if (!shortcutsEnabled || text.length===0) return;

    // Basic Operations (Ctrl + ...)
    if (e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'u': // Uppercase
          if (text.length > 0) setText(text.toUpperCase());
          toast.success('Converted to UpperCase!');
          break;
        case 'l': // Lowercase
          if (text.length > 0) setText(text.toLowerCase());
          toast.success('Converted to LowerCase!');
          break;
        case 'c': // Copy
          if (text.length > 0) {
            navigator.clipboard.writeText(text);
            toast.success('Copied to clipboard!');
          }
          break;
        case 'x': // Clear
          if (text.length > 0) setText('');
          toast.success('Text cleared!');
          break;
        case 's': // Remove extra spaces
          if (text.length > 0) setText(text.replace(/\s+/g, ' ').trim());
          toast.success('Removed extra spaces!');
          break;
        case '1': // Export as TXT
          exportAsTXT();
          break;
        case '2': // Export as PDF
          exportAsPDF();
          break;
        case '3': // Export as DOC
          exportAsDOC();
          break;
        default:
          break;
      }
    }

    // Case Conversion (Ctrl + Shift + ...)
    if (e.ctrlKey && e.shiftKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'i': // Title Case
          handleTitleCase();
          break;
        case 'e': // Sentence Case
          handleSentenceCase();
          break;
        case 'g': // Toggle Case
          handleToggleCase();
          break;
        default:
          return;
      }
    }

    // Text Reversal (Ctrl + Alt + ...)
    if (e.ctrlKey && e.altKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'l': // Reverse Lines
          handleReverseLine();
          break;
        case 'w': // Reverse Words
          handleReverseWord();
          break;
        case 'z': // Reverse Sentences
          handleReverseSentence();
          break;
        default:
          break;
      }
    }
  };


  const handleReverseLine = () => {
    const lines = text.split('\n');
    const reversedLines = [...lines].reverse().join('\n');
    setText(reversedLines);
    toast.success('Lines reversed successfully!');
  };

  const handleReverseWord = () => {

    const words = text.split(/\s+/);
    const nonEmptyWords = words.filter(word => word.length > 0);
    const reversedWords = [...nonEmptyWords].reverse().join(' ');

    setText(reversedWords);
    toast.success('Words reversed successfully!');
  };

  const handleReverseSentence = () => {

    const sentences = text.split(/([.!?])\s+/);

    const reconstructed = [];
    for (let i = 0; i < sentences.length; i += 2) {
      if (sentences[i]) {
        reconstructed.push(
          sentences[i] + (sentences[i + 1] ? sentences[i + 1] : '')
        );
      }
    }
    const reversedSentences = [...reconstructed].reverse().join(' ');
    setText(reversedSentences);
    toast.success('Sentences reversed successfully!');
  };

  const handleTitleCase = () => {
    const titleCased = text
      .toLowerCase()
      .split(' ')
      .map(word =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join(' ');
    setText(titleCased);
    toast.success('Converted to Title Case');
  };

  const handleSentenceCase = () => {
    const sentenceCased = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]+(\s+|)\w)/g, match => match.toUpperCase());
    setText(sentenceCased);
    toast.success('Converted to Sentence Case');
  };

  const handleToggleCase = () => {
    setText(prevText => {
      const toggled = prevText
        .split('')
        .map(char =>
          char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        )
        .join('');
      return toggled;
    });
    toast.success('Converted to Toggle Case');
  };


  // Export functions (updated versions)
  const exportAsTXT = () => {
    if (!text.trim()) {
      toast.error('No text to export');
      return;
    }

    // Normalize line endings and add metadata
    const normalizedText = text.replace(/\r?\n/g, '\r\n');
    const metaHeader = `=== Exported Text ===\r\nDate: ${new Date().toLocaleString()}\r\n\r\n`;
    const fullText = metaHeader + normalizedText;

    // Add timestamp to filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `document-${timestamp}.txt`);
    toast.success('Exported as TXT file');
  };

  const exportAsPDF = () => {
    if (!text.trim()) {
      toast.error('No text to export');
      return;
    }

    const doc = new jsPDF();
    const margin = 15;
    const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
    const lines = doc.splitTextToSize(text, maxWidth);

    let y = 20;
    lines.forEach(line => {
      if (y > doc.internal.pageSize.getHeight() - 20) {
        doc.addPage();
        y = 20;
      }
      doc.text(line, margin, y);
      y += 7;
    });

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    doc.save(`document-${timestamp}.pdf`);
    toast.success('Exported as PDF file');
  };

  const exportAsDOC = async () => {
    if (!text.trim()) {
      toast.error('No text to export');
      return;
    }

    try {
      const doc = new Document({
        sections: [{
          properties: {
            page: {
              margin: { top: 1000, bottom: 1000, left: 1000, right: 1000 }
            }
          },
          children: [
            new Paragraph({
              children: [new TextRun({
                text: "Exported Document",
                bold: true,
                size: 24,
              })],
              spacing: { after: 400 },
            }),
            ...text.split('\n').map(line =>
              new Paragraph({
                children: [new TextRun(line)],
                spacing: { line: 300 },
              })
            )
          ]
        }]
      });

      const blob = await Packer.toBlob(doc);
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      saveAs(blob, `document-${timestamp}.docx`);
      toast.success('Exported as DOCX file');
    } catch (error) {
      toast.error(`DOCX export failed: ${error.message}`);
      console.error('DOCX error:', error);
    }
  };

  // Voice recognition functions
  const initRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error('Speech Recognition is not supported in this browser.');
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(prev => prev + ' ' + transcript);
      toast.success('Text recognized!');
    };

    recognition.onend = () => {
      setIsListening(false);
      toast.info('Listening stopped.');
    };

    recognition.onerror = (event) => {
      toast.error('Recognition error: ' + event.error);
      setIsListening(false);
    };

    return recognition;
  };

  const handleStartListening = () => {
    if (!recognitionRef.current) {
      recognitionRef.current = initRecognition();
      if (!recognitionRef.current) return;
    }

    try {
      recognitionRef.current.start();
      setIsListening(true);
      toast.success('Listening... Speak now.');
    } catch (error) {
      toast.error('Error starting recognition: ' + error.message);
    }
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      toast.info('Listening stopped.');
    }
  };

  const toggleShortcuts = () => {
    setShortcutsEnabled(!shortcutsEnabled);
    toast.success(`Keyboard shortcuts ${!shortcutsEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <div>
      <button
        className="btn btn-sm mt-3 mb-2 d-block"
        style={{
          backgroundColor: 'tomato',
          color: 'white',
          pointerEvents: 'none',
          cursor: 'default'
        }}
      >
        Commands
      </button>

      <button
        onClick={handleStartListening}
        type="button"
        className={`btn btn-sm me-2 ${isListening ? 'btn-success' : 'btn-primary'}`}
        disabled={isListening}
      >
        <i className="ri-speak-line me-1"></i>
        {isListening ? 'Listening...' : 'Talk to Type'}
      </button>

      {isListening && (
        <button
          onClick={handleStopListening}
          type="button"
          className="btn btn-sm btn-danger me-2"
        >
          <i className='ri-stop-fill'></i> Stop
        </button>
      )}

      <button
        onClick={toggleShortcuts}
        type="button"
        className={`btn btn-sm me-2 ${shortcutsEnabled ? 'btn-success' : 'btn-primary'}`}
        disabled={text.length === 0}
      >
        <i className="ri-command-fill"></i> Shortcuts {shortcutsEnabled ? '(ON)' : '(OFF)'}
      </button>
    </div>
  );
}

export default Voice_Command;