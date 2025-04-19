import React, { useState } from 'react';

function Encrypt_Decrypt({ text, setText }) {
    const [encryptionKey, setEncryptionKey] = useState('');
    const [isEncrypted, setIsEncrypted] = useState(false);
    const [storedKeyHash, setStoredKeyHash] = useState('');

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
        // Simple hash by charCode summing (not secure, but enough for comparison)
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

    return (
        <div>
            <button
                className="btn btn-sm mt-3 mb-2 d-block"
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
                <div className="input-group me-1" style={{ width: '410px' }}>
                    <input
                        type="password"
                        className="form-control form-control-sm"
                        placeholder="Encryption Key"
                        value={encryptionKey}
                        onChange={(e) => setEncryptionKey(e.target.value)}
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
                    onClick={handleEncrypt}
                    disabled={!text.trim() || isEncrypted}
                >
                    <i className="ri-folder-keyhole-line"></i> Encrypt
                </button>

                <button
                    className="btn btn-success btn-sm me-2"
                    onClick={handleDecrypt}
                    disabled={!isEncrypted}
                >
                    <i className="ri-folder-keyhole-fill"></i> Decrypt
                </button>
            </div>
        </div>
    );
}

export default Encrypt_Decrypt;
