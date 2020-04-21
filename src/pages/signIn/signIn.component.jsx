import React from 'react';
import './signIn.styles.scss';
import Logo from '../../assets/images/brand_logo.png';
import Background from '../../assets/images/header_image.jpg';
import NetflixForm from '../../components/form/form.component';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return(
            <div className="signIn">
                <div style={signIn.background}>
                    <div className="signIn__overlay"></div>
                    <div className="signIn__brandLogo">
                        <img src={Logo} className="brand__logo" alt="Brand logo"/>
                    </div>
                    <div className="signIn__form">
                        <NetflixForm />
                    </div>
                </div>
            </div>
        );
    }
}

const signIn = {
    background: {
        backgroundImage: `url('${Background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "120vh",
        width: "100%"
    }
}

export default SignIn;