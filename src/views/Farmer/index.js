import React, { useState } from 'react';

import './styles.scss';
import Wizard from '../../components/Wizard';
import FarmerSignup from '../../components/FarmerSignup';

export default function Farmer() {
    const [ page, setPage ] = useState('wizard');

    let CurrentPageComponent = null;

    switch (page) {
        case 'wizard':
            CurrentPageComponent = <Wizard onStart={() => { setPage('signup'); }} />
            break;
        case 'signup':
            CurrentPageComponent = <FarmerSignup onSubmit={() => { setPage('welcome'); }} />
            break;
        case 'welcome':
            CurrentPageComponent = <h1>Welcome?</h1>
            break;
    }

    return (
        <section className='Farmer'>
            { CurrentPageComponent }
        </section>
    )
}
