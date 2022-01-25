import React from 'react';
import PropTypes from 'prop-types';
;


export const GifGridItem = ({ title, url }) => {
    //console.log(url)

    return (
        <div className="card animate__animated animate__flipInY">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}