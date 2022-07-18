import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "../axios";
import { MDBRow, MDBCol, MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState("");
    const [isloading, setIsLoading] = useState(true);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await axios.get(`/products/${id}`); //fetching the product details with the help of id
                setProductDetails(data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [id]);

    // console.log(productDetails);

    return (
        <div>
            {isloading ? (
                <div className='d-flex justify-content-center my-5'>
                    <MDBBtn disabled className="my-5">
                        <MDBSpinner size='sm' role='status' tag='span' className='me-2' />
                        Loading...
                    </MDBBtn>
                </div>
            ) : (
                <Container>
                    <MDBRow>
                        <MDBCol lg='4' className="text-center">
                            <img
                                src={productDetails.data.image}
                                className='img-thumbnail my-5'
                                alt='...'
                                style={{ maxWidth: '18rem' }}
                            />
                        </MDBCol>
                        <MDBCol lg='8' className="my-5">
                            <div><h1>{productDetails.data.title}</h1></div>
                            <div><p className="mt-3">{productDetails.data.category}</p></div>
                            <div><p className="mt-3">{productDetails.data.description}</p></div>
                            <div><p className="mt-3">{productDetails.data.rating.rate}/5</p></div>
                            <div><p className="mt-3">{productDetails.data.rating.count} views</p></div>
                        </MDBCol>
                    </MDBRow>
                </Container>)
            }
        </div>
    )
}

export default ProductDetails;