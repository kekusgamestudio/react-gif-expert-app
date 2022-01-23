import React from 'react'

export const GifGridItem = ({ title, url }) => {
    //console.log(url)

    return (
        <div className="card animate__animated animate__flipInY">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
