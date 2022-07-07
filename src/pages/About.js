import React from 'react';

export default function About() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex space-x-2 justify-center items-center w-1/2'>
                <div className='flex w-full'>
                    <img src='../../matt-headshot.jpg' className='h-64 rounded-sm' alt='Matt on a beach.' />
                </div>
                <div className='flex flex-col justify-center p-4'>
                    <h1 className='text-3xl font-medium mb-3'>Hello world.</h1>
                    <p className='text-start flex-wrap w-4/5'>My name is Matthew and I am an aspiring software developer.<br /><br /> Before I started to learn full-stack development with the University of Toronto, I finished my studies at Laurentian University with my Bachelor of Physical Health Education and Bachelor of Education. I am pursueing a career in web development because of my passion for technology, for media and art.</p>
                </div>
            </div>
        </div>
    );
};