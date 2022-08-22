import React from 'react';
import Button from '../Button/Button';
import "./Contact.css"

const Contact = () => {
    return ( <div className='main contact' id='contact'>
        <h3>Did you like what you saw ?</h3>
        <h1 className='contact-me'>Contact me!</h1>

        <p className='little-desc' > If you like some of my projects and skills, my inbox is open for you and I would be delighted to receive your message!</p>

        <Button link={"mailto:denis_jr2001@hotmail.com"}>Say Hello</Button>

    </div> );
}
 
export default Contact;