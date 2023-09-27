import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../css/Message.css';
import messagepic from '../image/message.png';

const Message = () => {

const form =useRef();

const SendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_c94uumm','template_6c1s4xo',form.current,'sGSHCzrDYZ7Eign2W')
    .then((result)=>{
        console.log(result.text);
    },(error)=>{
        console.log(error.text);
    }
    );
};

  return (
    <>
    <div className='message'>
<form ref={form} onSubmit={SendEmail} className='form'>
    <h1 id='headline'>Contact Me</h1>
    <tr>
        <td><label id='name' className='font'>Full Name:</label></td>
        <td><input type='text' name='name'  /><br/></td>
    </tr>
    <tr>
        <td><label id='email'className='font'>Email:</label></td>
        <td><input type='email' name='email'  /></td>
    </tr>
    <tr>
        <td><label id='message'className='font'>Message: </label></td>
        <td><textarea name='message' /><br/></td>
    </tr>
                <input type='submit' value='send' id='submit'/>
       
</form>
<div className='content'>
<img src={messagepic} id='messageimage' />
</div>

    </div>

    </>
  )
}

export default Message