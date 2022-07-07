import React from 'react';
import ContactForm from './projects/ContactForm';

export default function Contact() {
    return (
        <div className='flex flex-col items-center justify-center p-6 h-screen'>
            <div className='flex flex-col space-y-2 border border-slate-100 p-8 bg-white rounded-md shadow-sm'>
                <div className='flex space-x-8 justify-around items-center'>
                    <ContactForm />
                    <img src='../../matt-headshot.jpg' className='h-64 rounded-md border border-1 border-slate-200' alt='Matt on beach' />
                </div>
                <div className='flex flex-col space-y-4 justify-center items-center '>
                    <div className='flex space-x-2 mt-4'>
                        <p className='font-medium'>Email:</p>
                        <p>matthewapryor@gmail.com</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-medium'>Phone:</p>
                        <p>647-705-7708</p>
                    </div>
                </div>
            </div>
        </div>
    );
};