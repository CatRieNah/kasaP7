import React from 'react';
import apartments from "../datas/logements.json"
const ApartmentCard = () => {
    return (
        <ul className="apart-container">
        {apartments.map((apart) => (
            <li key={apart.id} className="apart-card">
                    <img src={apart.cover} alt={apart.title} />
                    <h2>{apart.title}</h2>
            </li>
        ))}
        </ul>
    );
};

export default ApartmentCard;