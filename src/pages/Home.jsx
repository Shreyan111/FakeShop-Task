import React, { useEffect, useState } from "react";
import axios from "../axios";
import Cards from "../components/Cards";
import { MDBContainer, MDBRow, MDBCol, MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';

const Home = () => {
    //creating use states and setting its initial value
    const [products, setProducts] = useState("");
    const [isloading, setIsLoading] = useState(true);

    //use effect performs side effects in function components and renders the data on loading
    useEffect(() => {
        const fetchdata = async () => {
            setIsLoading(true);
            try {
                const data = await axios.get("/products"); //fetching the data
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        fetchdata();
    }, []);

    // console.log(products);

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
                <MDBContainer>
                    <MDBRow className="d-flex justify-content-around p-2 m-4">
                        {products &&
                            products?.data.map((product) => (
                                <MDBCol lg={4} md={6} xs={12} sm={12} className="mb-5">
                                    <Cards
                                        id={product.id}
                                        image={product.image}
                                        price={product.price}
                                        rating={product.rating}
                                        title={product.title}
                                    />
                                </MDBCol>
                            ))}
                    </MDBRow>
                </MDBContainer>)
            }
        </div>
    )
}

export default Home;