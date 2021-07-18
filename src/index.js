import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import Imgefileinput from './components/image_file_input/image_file_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const Fileinput = props => (
  <Imgefileinput {...props} ImageUploader={imageUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} Fileinput={Fileinput} />
  </React.StrictMode>,
  document.getElementById('root')
);