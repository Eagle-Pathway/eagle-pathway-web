'use client';

import { useState, useRef } from 'react';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';

type Props = {
  file: File | null;
  onFileSelect: (file: File | null) => void;
};

export default function FileUpload({ file, onFileSelect }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndSelect(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSelect(e.target.files[0]);
    }
  };

  const validateAndSelect = (selectedFile: File) => {
    // Validate size (5MB = 5 * 1024 * 1024 bytes)
    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5MB limit.");
      return;
    }
    
    // Validate type
    const validTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Invalid file type. Please upload a PDF, PNG, or JPG.");
      return;
    }

    onFileSelect(selectedFile);
  };

  return (
    <div className="consult-upload-wrapper">
      {file ? (
        <div className="consult-file-preview">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileIcon size={24} color="var(--orange)" />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>{file.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
            </div>
          </div>
          <button type="button" onClick={() => onFileSelect(null)} className="consult-file-remove">
            <X size={18} />
          </button>
        </div>
      ) : (
        <div 
          className={`consult-upload-zone ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <UploadCloud size={42} color="var(--navy)" style={{ marginBottom: '1rem' }} />
          <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.25rem' }}>Click or drag to upload receipt</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>PDF, PNG, or JPG (Max 5MB)</p>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept=".pdf,image/png,image/jpeg" 
            style={{ display: 'none' }} 
          />
        </div>
      )}
    </div>
  );
}
