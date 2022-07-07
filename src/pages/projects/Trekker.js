import React from 'react'

export default function Trekker() {
    return (
        <div className='flex flex-col w-full mx-2 my-auto justify-center items-center bg-white border border-slate-100 p-2 rounded-md'>
            <div className='flex space-x-8 py-2 h-full justify-around '>
                <div className='flex flex-col justify-center items-start'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-center'>
                            <h1 className='font-medium text-4xl mb-4'>Trekker</h1>
                        </div>
                        <div className='flex w-full justify-center'>
                            <img src='https://github.com/project1team7/Trekking-App/raw/main/assets/images/Trekking-APP.gif' className='object-fit h-64 w-full' alt='Matthew on a beach.' />
                        </div>
                    </div>
                    <div>
                        <p className='flex flex-wrap mx-4 my-4 text-center'>A website that provides a quick way to to search for trails around you.</p>
                    </div>
                    <div className='flex w-full justify-between px-3'>

                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Team:</p>
                            <div className='flex justify-start flex-wrap'>
                                <a href='https://github.com/lucaspittam'><p className='text-blue-500 font-medium mr-2'>Lucas P.</p></a>
                                <a href='https://github.com/flalmeida3105'><p className='text-blue-500 font-medium mr-2'>Fernando A.</p></a>
                                <a href='https://github.com/TiggerTiff'><p className='text-blue-500 font-medium mr-2'>Tiffany B.</p></a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Status:</p>
                            <p className='font-medium'>Complete</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
