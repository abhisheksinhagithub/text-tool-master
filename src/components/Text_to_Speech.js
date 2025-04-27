import React, { useState, useEffect } from 'react';

function Text_to_Speech({ text, mode }) {

  const inputColor = mode === 'dark' ? 'rgb(20, 20, 20)' : 'white';
  const textColor = mode === 'dark' ? 'white' : 'black';

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState(null); // For voice selection
  const [voices, setVoices] = useState([]); // For storing available voices
  const speech = window.speechSynthesis; // Browser TTS API

  // Load voices when component mounts and when speech synthesis is ready
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speech.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setVoice(availableVoices[0]); // Set default voice
      }
    };

    // Some browsers need this event to load voices
    speech.onvoiceschanged = loadVoices;
    loadVoices();

    return () => {
      speech.onvoiceschanged = null;
      speech.cancel(); // Clean up any ongoing speech when component unmounts
    };
  }, []);

  const handleTextToSpeech = () => {
    // Edge Case 1: Empty text
    if (!text.trim()) {
      alert('No text to speak', 'warning');
      return;
    }

    // Edge Case 2: Already speaking
    if (isSpeaking) {
      speech.cancel();
      setIsSpeaking(false);
      alert('Speech stopped', 'info');
      return;
    }

    // Edge Case 3: Browser not supported
    if (!speech) {
      alert('Text-to-speech not supported in your browser', 'danger');
      return;
    }

    // Main TTS logic
    const utterance = new SpeechSynthesisUtterance(text);

    // Voice selection (if available)
    if (voice) utterance.voice = voice;

    // Event handlers
    utterance.onend = () => {
      setIsSpeaking(false);
      alert('Speech completed', 'success');
    };

    utterance.onerror = (e) => {
      setIsSpeaking(false);
      alert(`Speech error: ${e.error}`, 'danger');
    };

    speech.speak(utterance);
    setIsSpeaking(true);
    alert('Reading text...', 'info');
  };

  return (
    <div>
      <button className="btn btn-sm mt-3 mb-2 d-block"
        style={{
          backgroundColor: 'tomato',
          color: 'white',
          pointerEvents: 'none',
          cursor: 'default'
        }}
      >
        Text to Speech
      </button>

      <div className="d-flex align-items-center gap-2 flex-wrap">
        {/* TTS Button */}
        <button
          disabled={!text.trim()}
          onClick={handleTextToSpeech}
          type="button"
          className={`btn btn-sm ${isSpeaking ? 'btn-danger' : 'btn-primary'}`}
        >
          <i className={`ri-${isSpeaking ? 'stop-fill' : 'volume-up-fill'}`}></i>
          {isSpeaking ? ' Stop' : ' Read Aloud'}
        </button>

        {/* Voice Selection */}
        {voices.length > 0 && (
          <select
            className="form-select form-select-sm"
            value={voices.indexOf(voice)}
            onChange={(e) => setVoice(voices[e.target.value])}
            style={{
              maxWidth: '350px',
              outline: 'none',
              boxShadow: 'none',
              border: '1px solid black',
              transition: 'border-color 0.15s ease-in-out',
              backgroundColor: inputColor,
              color: textColor
            }}
            disabled={isSpeaking}

          >
            {voices.map((v, i) => (
              <option key={v.name} value={i}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        )}
      </div>

    </div>
  )
}

export default Text_to_Speech