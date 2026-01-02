import { Chicle } from 'next/font/google';
import React from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 px-6 py-3 rounded mt-2  text-black'>
            <h2 className='text-4xl font-bold'>{children}</h2>
        </div>
    );
};

export default Title;