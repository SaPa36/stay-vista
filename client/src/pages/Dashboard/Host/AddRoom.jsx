import React, { useState } from 'react';
import AddRoomForm from '../../../components/Form/AddRoomForm';

const AddRoom = () => {
  // 1. Define all the states required by the form
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState('Upload Image');
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  // 2. Define the handlers
  const handleDates = item => {
    setDates(item.selection);
  };

  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <div>
      {/* 3. Pass all props to the form */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
        setImagePreview={setImagePreview}
        imagePreview={imagePreview}
        imageText={imageText}
        handleImage={handleImage}
        loading={loading}
      />
    </div>
  );
};

export default AddRoom;