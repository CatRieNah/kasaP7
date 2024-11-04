import React from 'react';
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import apartments from "../datas/logements.json";

const ApartmentCard = () => {
    const navigate = useNavigate(); // Initialiser useNavigate

    const handleCardClick = (id) => {
        navigate(`/Logement/${id}`); 
    };

    return (
        <ul className="apart-container">
            {apartments.map((apart) => (
                <li key={apart.id} className="apart-card" onClick={handleCardClick}> {/* Ajouter onClick ici */}
                    <img src={apart.cover} alt={apart.title} />
                    <h2>{apart.title}</h2>
                </li>
            ))}
        </ul>
    );
};

export default ApartmentCard;