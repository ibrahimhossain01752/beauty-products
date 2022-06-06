
// import emailjs from '@emailjs/browser';
import React,{useRef} from 'react';
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import './Email.css';



const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_kec65a1",
          "template_966n2d9",
          form.current,
          "ZL-Q0Vg6WeBfw_xFM"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
        <div class="">
          
        <div className='banner-main3 text-white mt-5'>
    <div className="banner-overlay">
    <div className="container col-md-12 col-sm-6 ">
        <div className="row emil">
        {/* <Fade left> */}
            <div className="col-md-6">
                <div className="banner-content text-center text-md-start emails-text">
                    <h2>GET NOTIFIED FOR</h2>
                   <p className="email-text">LATEST OFFERS NEW DESIGNS</p>
                    
                    
                </div>
            </div>
            <div className="col-md-6">
            {/* <StyledContactForm> */}
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    {/* </StyledContactForm> */}
            </div>
           
           
       
        </div>
    </div>
    </div>
</div>
        
    </div>
           
   
    
      

          
     
       
    );
};

export default Email;


/* 

<from onsubmit={sendEmail}>
        <input type="hidden" name="form_type" value="customer"/><input type="hidden" name="utf8" value="✓"/>
        

        <input type="email" value="" placeholder="Email address" name="contact[email]" class="mail" aria-label="Email address"/>
        <input type="hidden" name="contact[tags]" value="newsletter"/>
        <button type="submit" class="btn subscribe" name="subscribe" value="">Subscribe</button>  
        </from> 
       



*/


/* 

function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_kec65a1', 'template_966n2d9', e.target, 'ZL-Q0Vg6WeBfw_xFM')
        .then((result) => {
        console.log(result.text);
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset();
        }


*/