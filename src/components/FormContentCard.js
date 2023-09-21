import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

//example
//props==={};
const FormContentCard = ({contents}) => {
    
    return (
            <Card>
                <Card.Body>
                    <Card.Text>
                        {contents.content}
                        <p>
                        {contents.date} {contents.user}
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default FormContentCard