import React from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import { Document, Paragraph, Packer, TextRun } from 'docx';
import { toast } from 'react-toastify';

function Export(props) {
  // Improved TXT export with timestamp and metadata
  const exportAsTXT = () => {
    if (!props.text.trim()) {
      toast.error('No text to export');
      return;
    }

    const normalizedText = props.text.replace(/\r?\n/g, '\r\n');
    const metaHeader = `=== Exported Text ===\r\nDate: ${new Date().toLocaleString()}\r\n\r\n`;
    const fullText = metaHeader + normalizedText;

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `document-${timestamp}.txt`);
    toast.success('Exported as TXT file');
  };

  // Improved PDF export with auto-pagination and margins
  const exportAsPDF = () => {
    if (!props.text.trim()) {
      toast.error('No text to export');
      return;
    }

    const doc = new jsPDF();
    const margin = 15;
    const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
    const lines = doc.splitTextToSize(props.text, maxWidth);

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

  // Improved DOCX export with formatting
  const exportAsDOC = async () => {
    if (!props.text.trim()) {
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
            ...props.text.split('\n').map(line =>
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

      <button disabled={!props.text.trim()} onClick={exportAsTXT} className="btn btn-success btn-sm me-2 my-1">
        <i className="ri-export-fill"></i> Export as TXT
      </button>
      <button disabled={!props.text.trim()} onClick={exportAsPDF} className="btn btn-primary btn-sm me-2 my-1">
        <i className="ri-export-fill"></i> Export as PDF
      </button>
      <button disabled={!props.text.trim()} onClick={exportAsDOC} className="btn btn-warning btn-sm me-2 my-1">
        <i className="ri-export-fill"></i> Export as DOC
      </button>
    </div>
  );
}

export default Export;