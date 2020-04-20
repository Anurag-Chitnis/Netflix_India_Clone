import React from 'react';
import './animated-section.styles.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Background from '../../assets/images/device-mac.png';
import VideoBackground from '../../assets/images/video-devices-in.m4v';

const AnimatedSection = () => (
    <div className="animated-section">
        <Container>
            <Row>
                <Col>
                    <div className="animated-section__content">
                        <h1 className="heading__primary">Watch everywhere.</h1>
                        <h2 className="heading__seconday">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                    </div>
                </Col>
                <Col>
                    <div className="animated-section__animated">
                        <img src={Background} alt="Mac laptop image"/>
                        <video 
                        src={VideoBackground}
                        loop
                        autoPlay
                        className="animated-section__video"
                        ></video>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default AnimatedSection;