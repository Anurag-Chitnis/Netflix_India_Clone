import React from 'react';
import {Container, Row} from 'react-bootstrap';
import './footer.styles.scss';
import FooterItem from '../footer-item/footer-item.component';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';

const  Footer = ({footer_data}) => {
    function chunkArray(myArray, chunk_size=4) {
        let results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }
        return results;
    }
    return(
        <div className="footer">
            <footer>
                <Container>
                    <div className="footer__wrapper">
                        <h3 className="heading__tertiary">Questions? Contact us.</h3>
                        <Row>
                            {
                                chunkArray(footer_data).map(slice => (
                                    <FooterItem footerSlice={slice} key={uuidv4()}/>
                                ))
                            }
                        </Row>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

const mapStateToProps = ({footer: {FOOTER_DATA}}) => ({
    footer_data: FOOTER_DATA
})

export default connect(mapStateToProps)(Footer);