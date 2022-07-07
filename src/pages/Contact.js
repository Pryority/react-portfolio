import React from 'react';

export default function Contact() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex space-x-8 justify-around border border-slate-100 p-6 rounded-md'>
                <div className='flex flex-col space-y-4 justify-center items-center'>
                    <div className='flex space-x-2 '>
                        <p className='font-medium'>Email:</p>
                        <p>matthewapryor@gmail.com</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-medium'>Phone:</p>
                        <p>647-705-7708</p>
                    </div>
                </div>
                <img src='../../matt-headshot.jpg' className='h-64' />
            </div>
        </div>
    );
};