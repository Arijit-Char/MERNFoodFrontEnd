import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import {  useDispatch } from "./ContextReducer";
import { useNavigate } from "react-router-dom";
import "../index.css";
import {
  useDispatchProduct,
} from "../components/ContextReducerProduct";

function Bcard(props) {
  let dispatch = useDispatch();
  let options = props.options;
  let priceOptions = Object.keys(options);

  let dispatchProduct = useDispatchProduct();
  let priceRef = useRef();
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const handleAddtoCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItems.img,
    });
  };

  const handleAddtoproduct = async () => {
    await dispatchProduct({
      type: "ADD",
      id: props.foodItems._id,
      name: props.foodItems.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodItems.img,
      description: props.foodItems.description,
    });
    navigate("/product");
  };

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  const navigate = useNavigate();
  return (
    <div style={{ marginBottom: "30px" }} className="cards">
      <Card className="mt-3" style={{ width: "17rem", maxHeight: "360px" }}>
        <Card.Img
          style={{ height: "140px", objectFit: "fill", cursor: "pointer" }}
          variant="top"
          src={props.foodItems.img}
          onClick={handleAddtoproduct}
        />
        <Card.Body
          style={{ cursor: "pointer" }}
          className="p-0 pt-2"
          onClick={handleAddtoproduct}
        >
          <Card.Title className="p-3">{props.foodItems.name}</Card.Title>
        </Card.Body>

        <div className="container w-100 p-0" style={{ height: "27px" }}>
          <select
            className="mx-3 gradient-custom text-black rounded"
            onChange={(event) => setQty(event.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="mx-3 gradient-custom text-black rounded"
            onChange={(event) => setSize(event.target.value)}
            ref={priceRef}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-5">₹{finalPrice}</div>
        </div>

        <hr />

        <button
          className={"btn gradient-custom text-white justify-center my-3 mx-5"}
          onClick={handleAddtoCart}
        >
          Add to Cart
        </button>
      </Card>
    </div>
  );
}

export default Bcard;
