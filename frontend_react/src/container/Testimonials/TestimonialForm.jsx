import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './TestimonialForm.scss';
import { BsEmojiSmile } from 'react-icons/bs';

const TestimonialForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', imageUrl:{}, feedback: '' });

const { username, company,feedback } = formData;


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const uploadImage = (event) => {
    event.preventDefault()
    const selectedFile = event.target.files[0];
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff' ||selectedFile.type === 'image/webp') {
      client.assets
        .upload('image', selectedFile, { contentType: selectedFile.type, filename: selectedFile.name })
        .then((document) => {
          setFormData({...formData, imageUrl:document});
        })
        .catch((error) => {
          console.log('Upload failed:', error.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    const testimonials = {
      _type: 'testimonials',
      name: formData.username,
      company: formData.company,
      imageUrl: formData.imageUrl,
      feedback: formData.feedback,
    };

    client.create(testimonials)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!isFormSubmitted ? (
        <div className="app__testimonials-form app__flex">
         <h2 className="head-text">Testimonial Form</h2>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
           <input className="p-text" type="text" placeholder="title and/or organization" name="company" value={company} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <p className='text1'>Consider adding a headshot <BsEmojiSmile/></p>
          <input required type="file" alt= 'profile-img' placeholder="upload photo for faster approval" name="image"  onChange={uploadImage}/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder='Please feel free to leave an honest testimony on my behalf'
              value={feedback}
              name="feedback"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Share ' : 'Sharing...'}</button>
        </div>
      ) : (
        <div>
          <h4 className="text">
            Thank you sharing your experience! Your thoughts will be automatically approved shortly.
          </h4>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(TestimonialForm, 'app__testimonials'),
  'testimonials',
  'app__whitebg',
);