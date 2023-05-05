import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function FeedBack() {
  const [data, setData] = useState({
    name: "",
    feedback: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://mernappbackend-zg6i.onrender.com/api/feedbackuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        feedback: data.feedback,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid data");
    } else {
      navigate("/");
      alert("Thanks for Your FeedBack!");
    }
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container bg-dark">
      <Link
          style={{ textDecoration: "none" }}
          className="Link active fs-5 mx-2 my-3 "
          to="/"
        >
         <i class="fa-solid fa-house"></i>
        </Link>

        <h2 className="p-5 text-light">FEEDBACK FOR ME</h2>

      
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="text-light">Name</Form.Label>
            <Form.Control
              name="name"
              value={data.name}
              type="text"
              placeholder="Enter Name"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="text-light">Email address</Form.Label>
            <Form.Control
              name="feedback"
              value={data.feedback}
              type="textarea"
              placeholder="Enter Your FeedBack"
              onChange={onChange}
              style={{ height: "20vh", paddingBottom: "50" }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="m-3 btn btn-success"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
