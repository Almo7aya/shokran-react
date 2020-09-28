import React from 'react';

import './styles.scss';
import Button from '../common/Button'

export default function FarmerSignup({ onSubmit }) {
    return (
        <div className='FarmerSignup'>
            <h2>Signup</h2>
            <p>Please fill out your details</p>

            <form className='FarmerSignup__form'>
                <label>Name: </label>
                <input className='FarmerSignup__input' type='text' />
                <label>Mobile: </label>
                <input className='FarmerSignup__input' type='tel' />
                <label>City: </label>
                <input className='FarmerSignup__input' type='text' />
                <label>Products: </label>
                <input className='FarmerSignup__input' type='text' />
            </form>

            <Button onClick={onSubmit}>Signup</Button>
        </div>
    )
}
