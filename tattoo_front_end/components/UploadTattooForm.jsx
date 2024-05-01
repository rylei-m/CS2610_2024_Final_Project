// In UploadTattooForm.jsx

import React, { useState } from 'react';

const UploadTattooForm = ({ onSubmit, csrfToken }) => {
  const [formData, setFormData] = useState({
    image: null,
    description: '',
    is_public: false,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          // Call the onSubmit function passed from props and pass the form data
          await onSubmit(formData);
          setSubmissionStatus('success');
        } catch (err) {
          setError(err.message);
          setSubmissionStatus('error');
        }
      };
    return (
    <div>
      {/* Form JSX */}
      {submissionStatus === 'success' && <p>Upload successful!</p>}
      {submissionStatus === 'error' && <p>Error: {error}</p>}
    </div>
  );
}
export default UploadTattooForm;

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else if (e.target.type === 'checkbox') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // Basic validation
      if (!formData.image || !formData.description) {
        alert('Please provide both an image and a description.');
        return;
      }

      // Additional validation for the image file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Define allowed image types
      if (!allowedTypes.includes(formData.image.type)) {
        alert('Please select a valid image file (JPEG, PNG, or GIF).');
        return;
      }

      // Create FormData object to handle file uploads
      const formDataObj = new FormData();
      formDataObj.append('image', formData.image);
      formDataObj.append('description', formData.description);
      formDataObj.append('is_public', formData.is_public);

      // Call the onSubmit function passed from props and pass the form data
      onSubmit(formDataObj);

      // Optionally, you can reset the form fields after submission
      setFormData({ image: null, description: '', is_public: false });
    };


  return (
    <div>
      <h2>Upload a New Tattoo</h2>
      <div className="uploader" id="upload-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} required />
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
          <label htmlFor="is_public">Make Public:</label>
          <input type="checkbox" id="is_public" name="is_public" checked={formData.is_public} onChange={handleChange} />
          <button type="submit">Upload Tattoo</button>
        </form>
      </div>
    </div>
  );
}

export default UploadTattooForm;
