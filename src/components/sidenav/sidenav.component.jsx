import React from 'react';
import './sidenav.styles.scss';

const Sidenav = ({images}) => {
    return(
        <div className="sidenav">
            <div className="sidenav__icons">
                <div className="render">
                    {
                        images.map(img_src => (
                            <img src={`${img_src}.svg`} className="sidenav__images" alt="brand logo"/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidenav;