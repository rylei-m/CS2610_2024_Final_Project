import React, { useContext } from 'react';
import { StateContext } from './StateContext';

function UploadTattooForm({ csrfToken }) {
    const uploadHandler = (event) => {
        event.preventDefault();
        // Handle form submission
        // You can access form data using event.target
    };

    return (
        <div>
            <h2>Upload a New Tattoo</h2>
            <div className="uploader" id="upload-form">
                <form onSubmit={uploadHandler} encType="multipart/form-data">
                    <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" required />
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" required />
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
