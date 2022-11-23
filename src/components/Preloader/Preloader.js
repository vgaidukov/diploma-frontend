import React from 'react'
import './Preloader.css'

const Preloader = ({ isLoading, fullsize }) => {
    return (
        <div className={`preloader ${isLoading && "preloader_visible"} ${fullsize && "preloader_fullsize"}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
