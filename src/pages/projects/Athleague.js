import React from 'react'

export default function Athleague() {
    return (
        <div className='flex flex-col w-full mx-2 my-auto justify-center items-center bg-white border border-slate-100 p-2 rounded-md'>
            <div className='flex space-x-8 py-2 h-full justify-around'>
                <div className='flex flex-col justify-center items-start'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-center'>
                            <h1 className='font-medium text-4xl mb-4'>Athleague</h1>
                        </div>
                        <div className='flex w-full justify-center'>
                            <img src='https://github.com/Pryority/Athleague/raw/main/assets/images/thumbnail.png' className='object-fit h-64 w-full' alt='Matthew on a beach.' />
                        </div>
                    </div>
                    <div>
                        <p className='flex flex-wrap mx-4 my-4 text-center'>A mixed reality physical activity game.</p>
                    </div>
                    <div className='flex w-full justify-between px-3'>

                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Team:</p>
                            <div className='flex justify-start flex-wrap'>
                                <p className='text-blue-500 font-medium mr-2'>Solo</p>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm font-light'>Status:</p>
                            <p className='font-medium'>Incomplete</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
