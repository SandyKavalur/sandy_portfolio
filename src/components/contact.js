import React, { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios'

const Contact = () => {
    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        message: ''
    })

    const changeName = (e) => {
        setContact({
            ...contact,
            name: e.target.value
        })
    }
    const changeEmail = (e) => {
        setContact({
            ...contact,
            email: e.target.value
        })
    }
    const changeMessage = (e) => {
        setContact({
            ...contact,
            message: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/app/contact', contact)
        .then(res => console.log(res.data))

        setContact({
            name: '',
            email: '',
            message: ''
        })
    }


    const contact_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return(
        <motion.div className="container"
            variants={contact_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <form className='contact_form' onSubmit={onSubmit}>
                <input 
                    className='contact_item' 
                    type='text' 
                    id="name" 
                    name='name' 
                    placeholder='Enter Your Name' 
                    onChange={changeName}
                    value={contact.name}
                />
                <input 
                    className='contact_item' 
                    type='email' 
                    id='email' 
                    name='email' 
                    placeholder='Enter Your Mail Id' 
                    onChange={changeEmail}
                    value={contact.email}
                />
                <textarea 
                    className='contact_item' 
                    id='message' 
                    name='message' 
                    placeholder='Write your message' 
                    rows="5"
                    onChange={changeMessage}
                    value={contact.message}
                ></textarea>
                
                <input className="contact_send" type="submit" value="submit" />
            </form>
        </motion.div>
    )
}

export default Contact;