import React from 'react';
import {BsLinkedin,  BsMedium ,BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
      <div>
     <a href='https://www.linkedin.com/in/paul-de-cunha/' target="_blank" rel="noreferrer" ><BsLinkedin/></a> 
    </div>
    <div>
      <a href='https://github.com/paulde1' target="_blank" rel="noreferrer"><BsGithub/></a>
    </div>
    <div>
    <a href='https://www.facebook.com/paulandrewde/' target="_blank" rel="noreferrer"> <FaFacebookF/></a>
    </div>
    <div>
    <a href='https://medium.com/@pauldecunha7117' target="_blank" rel="noreferrer"> <BsMedium/></a>
    </div>
  </div>
);

export default SocialMedia;