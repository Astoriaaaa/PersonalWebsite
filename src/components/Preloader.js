import React from 'react';
import './preloader.css';
import Typewriter from './Typewriter';

export default function Preloader() {

    return (
        <div className='preloader'>
            <Typewriter text="System.out.print('Welcome')"/>
        </div>
    )
}

