import React from 'react';
import './flipped-side.styles.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Background from '../../assets/images/mobile_image.jpg';

const FlippedSide = () => (
    <div className="flipped-side">
        <Container>
            <Row>
                <Col>
                    <img src={Background} alt="Mobile Image..."/>
                </Col>
                <Col>
                    <div className="flipped-side__content">
                        <h1 className="heading__primary">Download your programmes to watch on the go.</h1>
                        <h2 className="heading__seconday">Save your data and watch all your favourites offline.</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default FlippedSide;