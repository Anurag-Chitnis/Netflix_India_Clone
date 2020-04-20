import React from 'react';
import './accordian-item.styles.scss';
import Accordion from 'react-bootstrap/Accordion';
import {Card, Body} from 'react-bootstrap';

const AccordianItem = ({id, title, content}) => (
    <Accordion key={id}>
        <Card className="accordian_section__card">
            <Accordion.Toggle as={Card.Header} eventKey="0"
            className="accordian_section__toggle">
                {title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0" className="accordian_section__toggle">
                <Card.Body>
                    {content}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
);

export default AccordianItem;