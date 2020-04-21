import React from 'react';
import {Container, Row} from 'react-bootstrap';
import FOOTER_DATA from './footer.data';
import './footer.styles.scss';
import FooterItem from '../footer-item/footer-item.component';
import { v4 as uuidv4 } from 'uuid';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            footerData: FOOTER_DATA,
            slicedFooter: [],
        };
    }

    componentDidMount() {
        let {footerData} = this.state;
        const slicedFooter = this.chunkArray(footerData, 4);
        this.setState({slicedFooter})
    }

    chunkArray(myArray, chunk_size){
        let results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }
        return results;
    }

    render() {
        return(
            <div className="footer">
                <footer>
                    <Container>
                        <div className="footer__wrapper">
                            <h3 className="heading__tertiary">Questions? Contact us.</h3>
                            <Row>
                                {
                                    this.state.slicedFooter.map(slice => (
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
}

export default Footer;