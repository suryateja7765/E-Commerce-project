// import React,{useState} from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Badge from "@mui/material/Badge";
// import Menu from '@mui/material/Menu';
// import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-bootstrap";

// function Headerr() {
//     const [anchorEl, setAnchorEl] = useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//   return (
//     <>
//       <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px",  position: "sticky",top: "0", zIndex:"1"}}>
//         <Container>
//           <NavLink to="/" style={{textDecoration:"none", color:"white", marginRight:"20px"}} >Add To Cart</NavLink>
//           <Nav className="me-auto">
//             <NavLink to="/" style={{textDecoration:"none", color:"white"}} >
//                 Home</NavLink>
//           </Nav>
//           <Badge badgeContent={4} color="primary"
//           id="basic-button"
//           aria-controls={open ? 'basic-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? 'true' : undefined}
//           onClick={handleClick}
//           >
//             {/* cdn links */}
//             <i
//               class="fa-sharp fa-solid fa-basket-shopping text-light"
//               style={{ fontSize: 30, cursor: "pointer" }}
//             ></i>
//           </Badge>
//         </Container>

//         <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//        <div className="card_details d-flex justify-content-center align-items-center" style={{width:"23rem", position:"relative",padding:10}}>
//         <i onClick={handleClose} className="fas fa-close smallclose" style={{cursor:"pointer", position:"absolute", top:2, right:20, fontSize:23}} ></i>
//         <p style={{fontSize:"22px"}} >your cart is empty</p>
//         <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="no img" style={{height:"70px", position:"relative", width:"5rem", padding:10 }}></img>
//        </div>
//       </Menu>
//       </Navbar>
//     </>
//   );
// }

// export default Headerr;


import React,{useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-bootstrap";

function Headerr() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px",  position: "sticky",top: "0", zIndex:"1"}}>
        <Container>
          <NavLink to="/" style={{textDecoration:"none", color:"white", marginRight:"20px"}} >Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" style={{textDecoration:"none", color:"white"}} >
                Home</NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            {/* cdn links */}
            <i
              class="fa-sharp fa-solid fa-basket-shopping text-light"
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
          'aria-labelledby': 'basic-button',
        }}
      >
       <div className="card_details d-flex justify-content-center align-items-center" style={{width:"23rem", position:"relative",padding:10}}>
        <i onClick={handleClose} className="fas fa-close smallclose" style={{cursor:"pointer", position:"absolute", top:2, right:20, fontSize:23}} ></i>
        <p style={{fontSize:"22px"}} >your cart is empty</p>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png" alt="no img" style={{height:"70px", position:"relative", width:"5rem", padding:10 }}></img>
       </div>
      </Menu>
      </Navbar>
    </>
  );
}

export default Headerr;





