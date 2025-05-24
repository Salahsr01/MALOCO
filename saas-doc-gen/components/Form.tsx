// components/Form.tsx
import React, { useState } from 'react';

interface FormData {
  [key: string]: string;
}

// Example: Define props for the form based on document type
interface FormProps {
  documentType: 'invoice' | 'report' | null; // Add more types as needed
  onSubmit: (data: FormData) => void;
}

const FormComponent: React.FC<FormProps> = ({ documentType, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Potentially call API to generate PDF here or in parent component
  };

  if (!documentType) {
    return <p>Please select a document type to see the form.</p>;
  }

  // Dynamically render form fields based on documentType
  // This is a very basic example. You'll want to make this more robust.
  const renderFormFields = () => {
    if (documentType === 'invoice') {
      return (
        <>
          <div>
            <label htmlFor="clientName">Client Name:</label>
            <input type="text" id="clientName" name="clientName" value={formData.clientName || ''} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="itemName">Item Name:</label>
            <input type="text" id="itemName" name="itemName" value={formData.itemName || ''} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" value={formData.price || ''} onChange={handleChange} required />
          </div>
        </>
      );
    } else if (documentType === 'report') {
      return (
        <>
          <div>
            <label htmlFor="reportTitle">Report Title:</label>
            <input type="text" id="reportTitle" name="reportTitle" value={formData.reportTitle || ''} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="preparedFor">Prepared For:</label>
            <input type="text" id="preparedFor" name="preparedFor" value={formData.preparedFor || ''} onChange={handleChange} required />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{documentType.charAt(0).toUpperCase() + documentType.slice(1)} Form</h2>
      {renderFormFields()}
      <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Generate PDF</button>
    </form>
  );
};

export default FormComponent;
