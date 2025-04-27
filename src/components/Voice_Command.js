import React, { useState, useRef, useEffect } from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { Document, Paragraph, Packer, TextRun } from 'docx';

function Voice_Command({ setText, text }) {
  const [isListening, setIsListening] = useState(false);
  const [shortcutsEnabled, setShortcutsEnabled] = useState(false);
  const recognitionRef = useRef(null);

  // State for encryption
  const [encryptionKey, setEncryptionKey] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [storedKeyHash, setStoredKeyHash] = useState('');

  // State for text-to-speech
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);

  // State for password generator
  const [passwordOptions, setPasswordOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  
  const [passwordLength, setPasswordLength] = useState(12);

  // Load voices for text-to-speech
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setVoice(availableVoices[0]);
      }
    };

    window.speechSynthesis.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
      window.speechSynthesis.cancel();
    };
  }, []);

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
  }, [shortcutsEnabled, text, encryptionKey, passwordOptions, passwordLength]);

  const handleKeyDown = (e) => {
    if (!shortcutsEnabled) return;

    // Basic Operations (Ctrl + ...)
    if (e.ctrlKey && !e.altKey && !e.shiftKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'u': // Uppercase
          if (text.length > 0) setText(text.toUpperCase());
          break;
        case 'l': // Lowercase
          if (text.length > 0) setText(text.toLowerCase());
          break;
        case 'c': // Copy
          if (text.length > 0) {
            navigator.clipboard.writeText(text);
            alert("Text copied to clipboard!");
          }
          break;
        case 'x': // Clear
          if (text.length > 0) setText('');
          break;
        case 's': // Remove extra spaces
          if (text.length > 0) setText(text.replace(/\s+/g, ' ').trim());
          break;
        case 'e': // Encrypt
          handleEncrypt();
          break;
        case 'd': // Decrypt
          handleDecrypt();
          break;
        case 'p': // Generate password
          generatePassword();
          break;
        case 't': // Text to speech
          handleTextToSpeech();
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
        case 't': // Title Case
          if (text.length > 0) {
            setText(text.toLowerCase().split(' ').map(word =>
              word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
            ).join(' '));
          }
          break;
        case 's': // Sentence Case
          if (text.length > 0) {
            setText(text.toLowerCase().replace(/(^\s*\w|[.!?]+(\s+|)\w)/g, match => match.toUpperCase()));
          }
          break;
        case 'g': // Toggle Case
          if (text.length > 0) {
            setText(text.split('').map(char =>
              char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
            ).join(''));
          }
          break;
        default:
          break;
      }
    }

    // Text Reversal (Ctrl + Alt + ...)
    if (e.ctrlKey && e.altKey) {
      e.preventDefault();
      switch (e.key.toLowerCase()) {
        case 'l': // Reverse Lines
          if (text.length > 0) setText(text.split('\n').reverse().join('\n'));
          break;
        case 'w': // Reverse Words
          if (text.length > 0) setText(text.split(/\s+/).filter(word => word.length > 0).reverse().join(' '));
          break;
        case 's': // Reverse Sentences
          if (text.length > 0) {
            const sentences = text.split(/([.!?])\s+/);
            const reconstructed = [];
            for (let i = 0; i < sentences.length; i += 2) {
              if (sentences[i]) {
                reconstructed.push(sentences[i] + (sentences[i + 1] ? sentences[i + 1] : ''));
              }
            }
            setText(reconstructed.reverse().join(' '));
          }
          break;
        default:
          break;
      }
    }
  };

  // Encryption functions
  const isValidKey = () => {
    if (!encryptionKey.trim()) {
      alert('Please enter an encryption key');
      return false;
    }
    if (encryptionKey.length < 8) {
      alert('Encryption key must be at least 8 characters long');
      return false;
    }
    return true;
  };

  const xorEncryptDecrypt = (input, key) => {
    return input.split('').map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    ).join('');
  };

  const generateKeyHash = (key) => {
    return key.split('').reduce((acc, char, i) => acc + (char.charCodeAt(0) * (i + 1)), 0).toString();
  };

  const handleEncrypt = () => {
    if (!text.trim()) {
      alert('No text to encrypt');
      return;
    }

    if (isEncrypted) {
      alert('Text is already encrypted');
      return;
    }

    if (!isValidKey()) return;

    try {
      const encodedText = encodeURIComponent(text);
      const xorEncrypted = xorEncryptDecrypt(encodedText, encryptionKey);
      const base64Encoded = btoa(xorEncrypted);
      const keyHash = generateKeyHash(encryptionKey);

      setText(base64Encoded);
      setIsEncrypted(true);
      setStoredKeyHash(keyHash);
      alert('Text encrypted successfully');
    } catch (error) {
      alert('Encryption failed');
    }
  };

  const handleDecrypt = () => {
    if (!text.trim()) {
      alert('No text to decrypt');
      return;
    }

    if (!isEncrypted) {
      alert('Text is not encrypted');
      return;
    }

    if (!isValidKey()) return;

    try {
      const currentKeyHash = generateKeyHash(encryptionKey);
      if (currentKeyHash !== storedKeyHash) {
        alert('Wrong encryption key');
        return;
      }

      const base64Decoded = atob(text);
      const xorDecrypted = xorEncryptDecrypt(base64Decoded, encryptionKey);
      const decodedText = decodeURIComponent(xorDecrypted);

      setText(decodedText);
      setIsEncrypted(false);
      setStoredKeyHash('');
      alert('Text decrypted successfully');
    } catch (error) {
      alert('Invalid key or corrupted data');
    }
  };

  // Text-to-speech functions
  const handleTextToSpeech = () => {
    if (!text.trim()) {
      alert('No text to speak');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      alert('Speech stopped');
      return;
    }

    if (!window.speechSynthesis) {
      alert('Text-to-speech not supported in your browser');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      setIsSpeaking(false);
      alert('Speech completed');
    };

    utterance.onerror = (e) => {
      setIsSpeaking(false);
      alert(`Speech error: ${e.error}`);
    };

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    alert('Reading text...');
  };

  // Export functions
  const exportAsTXT = () => {
    if (!text.trim()) {
      alert('No text to export');
      return;
    }
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'document.txt');
    alert('Exported as TXT file');
  };

  const exportAsPDF = () => {
    if (!text.trim()) {
      alert('No text to export');
      return;
    }
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save('document.pdf');
    alert('Exported as PDF file');
  };

  const exportAsDOC = async () => {
    if (!text.trim()) {
      alert('No text to export');
      return;
    }

    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: text.split('\n').map(line =>
            new Paragraph({
              children: [new TextRun(line)]
            })
          )
        }]
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'document.docx');
      alert('Exported as DOCX file');
    } catch (error) {
      console.error('DOCX export error:', error);
      alert('Failed to export as DOCX');
    }
  };

  // Password generator functions
  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let availableChars = '';
    if (passwordOptions.uppercase) availableChars += uppercaseChars;
    if (passwordOptions.lowercase) availableChars += lowercaseChars;
    if (passwordOptions.numbers) availableChars += numberChars;
    if (passwordOptions.symbols) availableChars += symbolChars;

    if (!availableChars) {
      alert('Please select at least one character type');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    setText(generatedPassword);
    alert('Password generated!');
  };

  // Voice recognition functions
  const initRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech Recognition is not supported in this browser.');
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(prev => prev + ' ' + transcript);
      alert(`Recognized: "${transcript}"`);
    };

    recognition.onend = () => {
      setIsListening(false);
      alert('Listening stopped.');
    };

    recognition.onerror = (event) => {
      alert(`Error occurred in recognition: ${event.error}`);
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
      alert('Listening... Speak now.');
    } catch (error) {
      alert('Error starting recognition: ' + error.message);
    }
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      alert('You stopped the speech recognition.');
    }
  };

  const toggleShortcuts = () => {
    setShortcutsEnabled(!shortcutsEnabled);
    alert(`Keyboard shortcuts ${!shortcutsEnabled ? 'enabled' : 'disabled'}`);
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