

// 3-------------

// Header component

import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { removeItem } from "../redux/action";

function Header() {

  

  const getData = useSelector((state) => state.CartReducer.carts);
  // for remove items-------
  const dispatch = useDispatch(); // Redux dispatch

  // total price-------
  const[price,setPrice]=useState(0)
  // console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
// remove function
  const handleDelete = (id) => {
    dispatch(removeItem(id)); // Dispatch removeItem action with item id
  };

  // total count
  const total=()=>{
    let price=0;
    getData.map((ele,k)=>{
      price = ele.price * ele.qnty + price
    })
    setPrice(price);
  }

  useEffect(()=>{
    total()
  },[total])

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{ height: "60px", position: "sticky", top: "0", zIndex: "1" }}
      >
        <Container>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              marginRight: "20px",
            }}
          >
          
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-sharp fa-solid fa-basket-shopping text-light"
              style={{ fontSize: 30, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
              <Table striped bordered={false}>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                    <th></th> 
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => (
                    <tr key={e.id}>
                      <td>
                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                          <img
                            src={e.imgdata}
                            style={{ width: "5rem", height: "5rem" }}
                            alt=""
                          />
                        </NavLink>
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price: ₹{e.price}</p>
                        <p>Quantity: {e.qnty}</p>
                      </td>
                      <td>
                        <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => handleDelete(e.id)}>
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="2" style={{ textAlign: "center" }}>
                      Total: ₹{price}
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "23rem", position: "relative", padding: 10 }}
            >
              <i
                onClick={handleClose}
                className="fas fa-close smallclose"
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                }}
              ></i>
              <p style={{ fontSize: "22px" }}>Your cart is empty</p>
              <img
                src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png"
                alt="no img"
                style={{
                  height: "70px",
                  position: "relative",
                  width: "5rem",
                  padding: 10,
                }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;

