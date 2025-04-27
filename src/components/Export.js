import React from 'react'

import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import { Document, Paragraph, Packer, TextRun } from 'docx';

function Export(props) {

  const exportAsTXT = () => {
    if (!props.text.trim()) {
      alert('No text to export', 'warning');
      return;
    }
    const blob = new Blob([props.text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'document.txt');
    alert('Exported as TXT file', 'success');
  };

  const exportAsPDF = () => {
    if (!props.text.trim()) {
      alert('No text to export', 'warning');
      return;
    }
    const doc = new jsPDF();
    doc.text(props.text, 10, 10);
    doc.save('document.pdf');
    alert('Exported as PDF file', 'success');
  };

  // New DOCX export using docx
  const exportAsDOC = async () => {
    if (!props.text.trim()) {
      alert('No text to export', 'warning');
      return;
    }

    try {
      const doc = new Document({
        sections: [{
          properties: {},
          children: props.text.split('\n').map(line =>
            new Paragraph({
              children: [new TextRun(line)]
            })
          )
        }]
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'document.docx');
      alert('Exported as DOCX file', 'success');
    } catch (error) {
      console.error('DOCX export error:', error);
      alert('Failed to export as DOCX', 'danger');
    }
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
        Export Options
      </button>

      <button disabled={!props.text.trim()} onClick={exportAsTXT} type="button" className="btn btn-success btn-sm me-2"><i className="ri-export-fill"></i> Export as TXT</button>
      <button disabled={!props.text.trim()} onClick={exportAsPDF} type="button" className="btn btn-primary btn-sm me-2"><i className="ri-export-fill"></i> Export as PDF</button>
      <button disabled={!props.text.trim()} onClick={exportAsDOC} type="button" className="btn btn-warning btn-sm me-2"><i className="ri-export-fill"></i> Export as DOC</button>


    </div>
  )
}

export default Export
