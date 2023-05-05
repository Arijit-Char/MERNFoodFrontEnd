import React from "react";
import { useCartProduct } from "../components/ContextReducerProduct";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import "../index.css";
import { Link } from "react-router-dom";

export default function Product() {
  let dataProduct = useCartProduct();

  if (dataProduct.length === 0) {
    return (
      <div className="bg-dark">
        <div className="m-5 w-100 text-center fs-3">  <div>
                        <Link
                          style={{ textDecoration: "none" , zIndex:"100"}}
                          className="Link active fs-5 mx-2 my-3 "
                          to="/"
                        >
                          <i class="fa-solid fa-house"></i>
                        </Link>
                      </div>  Click on a Product!</div>
      </div>
    );
  }
  return (
    <div>
      {dataProduct.map((food, index) => (
        <section className="h-10000 gradient-custom">
          <MDBContainer className="py-5 h-200 prodc">
            <MDBRow className="justify-content-center my-4">
              <MDBCol md="8">
                <MDBCard className="mb-4 ">
                  <MDBCardHeader className="py-3">
                    <MDBTypography
                      tag="h5"
                      className="mb-0"
                      style={{
                        textAlign: "center",
                        color: "blue",
                        fontSize: "40px",
                      }}
                    >
                      <div> <Link
                          style={{ textDecoration: "none" , zIndex:"100"}}
                          className="Link active fs-5 mx-2 my-3 "
                          to="/"
                        >
                          <i class="fa-solid fa-house" style={{color:"black "}}></i>
                        </Link></div>
                      {food.name}
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="12" className="mb-4 mb-lg-4">
                        <MDBRipple
                          rippleTag="div"
                          rippleColor="light"
                          className="bg-image rounded hover-zoom hover-overlay"
                        >
                          <img
                            src={food.img}
                            className="w-200 proimg"
                            alt=""
                            style={{objectFit:"fill"}}
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </MDBRipple>
                      </MDBCol>

                      <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0"></MDBCol>
                      <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        ></div>

                        <p className="text-start text-md-center">
                          <strong>
                            {" "}
                            <span
                              style={{ color: "blueviolet", fontSize: "40px" }}
                            >
                              {" "}
                              Price:{" "}
                            </span>{" "}
                            <span style={{ fontSize: "30px" }}>
                              {" "}
                              ₹ {food.price}{" "}
                            </span>
                          </strong>
                        </p>
                        <hr />
                        <p>
                          {" "}
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp;You Have Chosen: &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          &nbsp; Quantity of {food.qty} & Size of {food.size}{" "}
                        </p>
                        <hr />
                        <p className="text-start text-md-center">
                          <strong>
                            {" "}
                            <span
                              style={{ color: "blueviolet", fontSize: "40px" }}
                            >
                              {" "}
                              About:{" "}
                            </span>
                            <hr />{" "}
                            <span style={{ fontSize: "20px" }}>
                              {" "}
                              {food.description}
                            </span>
                          </strong>
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      ))}
    </div>
  );
}
