import React, { useState } from 'react';

const DropDown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen); // Basculer entre ouvert et fermé
    };

    return (
        <article className='dropdown'>
            <div className='dropdown-title'>
                <h2>{title}</h2>
                <button onClick={toggleOpen}>
                    <i className={`fa-solid fa-chevron-down ${isOpen ? 'rotated' : ''}`}></i>
                </button>
            </div>
            {isOpen ? <p>{content}</p> : null} {/* Affiche le paragraphe si isOpen est true */}
        </article>
    );
};

export default DropDown;