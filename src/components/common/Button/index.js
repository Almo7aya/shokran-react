import React from 'react'

import './styles.scss';

export default function Button({ onClick, children }) {
    return (
        <button className="Button" onClick={onClick ? onClick : null}>{children}</button>
    )
}
