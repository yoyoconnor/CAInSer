import React from "react";
import './SearchItem.css';
import { Link } from 'react-router-dom';

const SearchItem = (props) => {
    return (
        <Link to={`/applicationform/${props.id}`} className="search-item">
            <div className="search-item-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="search-item-text">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </Link>
    );
};

export default SearchItem;
