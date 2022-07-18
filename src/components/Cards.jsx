import React from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const Cards = ({ id, image, title, price, rating }) => {
    let navigate = useNavigate(); //navigating to the details page
    function navigation() {
        navigate(`/products/${id}`);
    }

    const openDetails = (e) => {
        navigation();
    };

    return (
        <MDBCard className='h-100'>
            <MDBCardImage src={image} position='top' className='mx-auto mt-2 w-50 h-50' alt='...' />
            <MDBCardBody className='d-flex flex-column'>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
                    Price: ₹ {price}
                </MDBCardText>
                <MDBContainer className='d-flex flex-row' style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <MDBCardText className="flex-grow-1">
                        <p>{rating.rate}/5</p>
                    </MDBCardText>
                    <MDBCardText className="flex-shrink-1">
                        <p>{rating.count} ratings</p>
                    </MDBCardText>
                </MDBContainer>
                <MDBBtn className='mt-auto' onClick={openDetails}>Details</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Cards;