import React from 'react';
import {Col} from 'react-bootstrap';
import './footer-item.styles.scss';

const FooterItem = ({footerSlice}) => {
    return(
        <Col style={col.customStyles}>
            <div className="footer-col__wrapper">
                <ul className="footer-col__list">
                    {
                        footerSlice.map(({title, id}) => (
                            <li key={id}>{title}</li>
                        ))
                    }
                </ul>
            </div>
        </Col>
    );
};

const col = {
    customStyles: {
        maxWidth: "23rem",
    }
}

export default FooterItem;