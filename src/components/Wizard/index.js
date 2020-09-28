import React from 'react';

import './styles.scss';
import Button from '../common/Button'

export default function Wizard({ onStart }) {
    return (
        <div className='Wizard'>
            <div className="Wizard__logo">
                <img src="https://via.placeholder.com/150" alt="" />
            </div>

            <div className="Wizard__details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </div>

            <Button onClick={onStart}>Start!</Button>
        </div>
    )
}
