import React from 'react';
import './side-section.styles.scss';
import {Container, Row, Col} from 'react-bootstrap';
import Background from '../../assets/images/tv.png';
import VideoBackground from '../../assets/images/video-tv-in.m4v';

const SideSection = () => (
    <div className="side-section">
        <Container>
            <Row>
                <Col>
                    <div className="side-section__content">
                        <h1 className="heading__primary">Enjoy on your TV.</h1>
                        <h2 className="heading__seconday">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                    </div>
                </Col>
                <Col>
                    <div className="side-section__animated">
                        <img src={Background} alt=""/>
                        <video
                        className="side-section__video"
                        loop
                        autoPlay 
                        src={VideoBackground}></video>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default SideSection;