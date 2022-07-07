import React from 'react';
import Athleague from './projects/Athleague';
import PizzaHunt from './projects/PizzaHunt';
import Trekker from './projects/Trekker';

export default function Portfolio() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex mx-2 h-full'>
                <Athleague />
                <Trekker />
                <PizzaHunt />
            </div>
        </div>
    );
};