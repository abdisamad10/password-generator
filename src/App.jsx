
import './style.scss';
import { useState } from 'react';
import {FaClipboard} from 'react-icons/fa';
function App() {

  const [password, setpassword] = useState("");
  const [passwordLength, setpasswordLength] = useState(20);
  const [Uppercase, setUppercase] = useState(true);
  const [lowercase, setlowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);


const handleGeneratorPassword = () => {}
const passwordCreator = () => {}
const generateRandomIndex = () => {}
  return (
    <div className="container">
      <div className='generator'>
        <h2 className='generator_header'>Password Generator</h2>
          <div className='generator_password'>
            
            <button className='generator_passwordGeneratebtn'>
            <FaClipboard />
            </button>
          </div>
          <div className='form-group'>
          <label htmlFor='password-length'>Password Length</label>
            <input name='password-length' type='number' max='20'
            min='7' />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            <input id='uppercase-letters' name='uppercase-letters' type='checkbox' /> 
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include Lower case Letters</label>
            <input id='lowercase-letters' className='lowercase-letters' type='checkbox' /> 
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input id='include-numbers' className='include-numbers' type='checkbox' /> 
          </div>

          <div className='form-group'>
            <label htmlFor='include-symbol'>Include Symbols</label>
            <input id='include-symbol' className='include-symbol' type='checkbox' /> 
          </div>
          <button className='generator_btn'>Generate New Password</button>
      </div>
    </div>
  );
}

export default App;
