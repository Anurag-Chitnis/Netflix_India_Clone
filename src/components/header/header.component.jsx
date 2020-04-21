import React from 'react';
import { Button} from 'react-bootstrap';
import './header.styles.scss';
import Background from '../../assets/images/header_image.jpg';
import InputGroup from '../input-group/input-group.component';
import {withRouter} from 'react-router-dom';

const Header = ({history: {push}}) => {

    const handleClick = () => {
        push('/signIn');
    }


    return (
        <header className="header" style={header_custom}>
            <div className="header__overlay"></div>
            <nav className="header__navbar">
                <div className="brand__logo">
                    <img src="brand_logo.png" alt="Brand Logo" className="header__image"/>
                </div>
                <Button onClick={handleClick} variant="danger" className="header__button">Sign In</Button>
            </nav>
            <div className="header__content">
                <h1 className="heading__primary">Unlimited movies, TV shows and more.</h1>
                <h2 className="heading__secondary">Watch anywhere. Cancel anytime.</h2>
                <InputGroup type="email" placeholder="Email address.."/>
                <p className="header__para">Ready to watch? Enter your email to create or access your account.</p>
            </div>
        </header>
    );
};

const header_custom = {
    backgroundImage: `url('${Background}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

export default withRouter(Header);