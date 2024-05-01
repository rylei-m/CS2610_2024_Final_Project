import React from 'react';

function UploadTattooForm() {
  const uploadHandler = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2>Upload a New Tattoo</h2>
      <div className="uploader" id="upload-form">
        <form onSubmit={uploadHandler} encType="multipart/form-data">
          <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />
          {/* Replace {{ form.as_p }} with individual input fields */}
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" required />
          {/* Add additional input fields as needed */}
          <label htmlFor="is_public">Make Public:</label>
          <input type="checkbox" id="is_public" name="is_public" />
          <button type="submit">Upload Tattoo</button>
        </form>
      </div>
    </div>
  );
}

export default UploadTattooForm;
