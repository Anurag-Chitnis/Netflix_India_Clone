import React from 'react';
import './faq.styles.scss';
import {Container} from 'react-bootstrap';
import AccordianItem from '../accordian-item/accordian-item.component';
import ACCORDIAN_DATA from './accordian-data';
import InputGroup from '../input-group/input-group.component';

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accordian_data: ACCORDIAN_DATA
        }
    }

    render() {
        return(
            <div className="faq_section">
                <Container>
                    <h1 className="heading__primary">Frequently Asked Questions</h1>
                    <div className="accordian_section">
                        {
                            this.state.accordian_data.map(({title, id, content}) => (
                                <AccordianItem title={title} content={content} key={id}/>
                            ))
                        }
                        <div className="input-group">
                            <InputGroup type="email" placeholder="email address..."/>
                            <p className="faq_section__para">Ready to watch? Enter your email to create or access your account.</p>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
};

export default FAQ;