import React, { useState } from 'react';
import { imageuploder } from '../../core/services/api/userpanelapi/ImageUpload';

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = {
            formFile:''
        }

        setIsUploading(true);
        try {
            const response = await imageuploder(formData)
            alert('Upload successful!');
            console.log('Response:', response);
        } catch (error) {
            alert('Error uploading file.');
            console.error(error);
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className=' h-10 w-full border rounded-lg flex flex-row items-center p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-200'>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleFileChange} 
                className="file-input mr-4"
            />
            <button 
                onClick={handleUpload} 
                disabled={isUploading}
                className={`px-4 text-xs rounded-lg font-semibold text-white transition-colors duration-200 
                ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`
                }
            >
                {isUploading ? 'Uploading...' : 'Upload Image'}
            </button>
        </div>
    );
};

export default ImageUpload;