import React from 'react';
import './faq.styles.scss';
import {Container} from 'react-bootstrap';
import AccordianItem from '../accordian-item/accordian-item.component';
import InputGroup from '../input-group/input-group.component';
import {connect} from 'react-redux';

const FAQ = ({faqs_data}) =>  {
    return(
        <div className="faq_section">
            <Container>
                <h1 className="heading__primary">Frequently Asked Questions</h1>
                <div className="accordian_section">
                    {
                        faqs_data.map(({title, id, content}) => (
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
};

const mapStateToProps = ({faqs: {FAQ_DATA}}) => ({
    faqs_data: FAQ_DATA
})

export default connect(mapStateToProps)(FAQ);