import React from 'react';
import PropTypes from 'prop-types';

 const GifGridItem = ({title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propType = {
    titulo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default GifGridItem;