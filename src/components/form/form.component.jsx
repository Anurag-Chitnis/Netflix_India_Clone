import React from 'react';
import './form.styles.scss';
import FacebookLogo from '../../assets/images/fb-logo.png';
 
const NetflixForm = () => (
    <div className="form__wrapper">
        <div className="container">
            <div className="form__content">
                <h2 className="form__title">Sign In</h2>
                <div className="form-group__wrapper">
                    <div className="form-group__thick">
                        <form className="form">
                            <input type="email" className="form__input" placeholder="Email or phone number" />
                            <input type="password" className="form__input" placeholder="Enter Password" />
                            <button className="form__button">Submit</button>
                            <div className="form__strategy">
                                <div className="checkbox">
                                    <input type="checkbox" id="checkbox"/>
                                    <label htmlFor="checkbox">Remember me</label>
                                </div>
                                <p>Need Help ?</p>
                            </div>
                            <div className="form__policy">
                                <div className="form__facebook side-by-side">
                                    <img src={FacebookLogo} alt=""/>
                                    <span className="info">Login With Facebook</span>
                                </div>
                                <div className="form__quest side-by-side">
                                    <span class="info info_large">New to Netflix?</span>
                                    <span className="info info_large white-color">Sign Up Now</span>
                                </div>
                                <div className="policy__text">
                                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more</a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default NetflixForm;