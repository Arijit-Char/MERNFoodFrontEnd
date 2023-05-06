import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Bcard from "../components/Bcard";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import "../index.css"

function Home() {
  const [search, setSearch] = useState("");

  const [foodCat, setFoodCat] = useState([]); //in array we can use map
  const [s, sets] = useState([]); //in array we can use map

  const loadData = async () => {
    let response = await fetch("https://mernappbackend-wg5z.onrender.com/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();

    sets(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-dark">
      <div>
        <NavBar />
      </div>

      <div>
        <Carousel>
          <Carousel.Item interval={111000} className="caro">
            <img
              style={{
                height: "80vh",
                objectFit: "cover",
                filter: "brightness(40%)",
                
              }}
              className="d-block w-100"
              src="https://source.unsplash.com/random/90×40/?burger"
              alt="First slide"
          
            />
            <Carousel.Caption>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search Your Food Here"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={11500} className="caro">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/90×40/?food"
              alt="Second slide"
              style={{
                height: "80vh",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
            <Carousel.Caption>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search Your Food Here"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="caro">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/90×40\\/?pasta"
              alt="Third slide"
              style={{
                height: "80vh",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
            />
            <Carousel.Caption>
              <div className="d-flex justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search Your Food Here"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div
                    key={data._id}
                    className="fs-3 m-3 "
                    style={{ color: "white" }}
                  >
                    {data.CategoryName}
                  </div>
                  <hr />
                  {s !== [] ? (
                    s
                      .filter(
                        (item) =>
                          item.CategoryName === data.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterIteams) => {
                        return (
                          <div
                            key={filterIteams._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <Bcard
                              foodItems={filterIteams}
                              options={filterIteams.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div> No such data found </div>
                  )}
                </div>
              );
            })
          : ""}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
