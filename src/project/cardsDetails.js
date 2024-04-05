import React from "react";
import Table from "react-bootstrap/Navbar";
function CardsDetails() {
  return (
    <div>
      <>
        <div>
          <h2
            style={{
              backgroundColor: "yellowgreen",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <b>Item Details</b>
          </h2>

          <section
            className="container"
            style={{ marginLeft: "270px", marginTop: "80px" }}
          >
            <div
              className="itemDetails"
              style={{
                display: "flex",
                border: "1px solid black",
                border: "none",
                boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.5)",
                marginLeft: "70px",
                marginRight: "70px",
                width: "800px",
              }}
            >
              <div className="itemsImg">
                <img
                  alt="noIMg"
                  style={{ width: "400px" }}
                  src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                ></img>
              </div>
              <div
                className="details"
                style={{ marginLeft: "70px", marginTop: "0px" }}
              >
                <Table>
                  <tr >
                    <td >
                      <p><b>Order:</b> Masala Theoryy</p>
                      <p><b>Price:</b> ₹300</p>
                      <p><b>Dishes:</b> North INdian , Biryani</p>
                      <p><b>Total:</b> ₹300</p>
                    </td>
                    <td >
                      <p><b>Rating:</b><span style={{backgroundColor:"green", padding:"2px 5px ", borderRadius:"5px" , color:"#fff"}}>3.5★</span></p>
                      <p><b>Review:</b> 1175+ order been placed </p>
                      <p style={{padding:"px"}}><b>Remove:</b> <i style={{color:"red", fontSize:"20px", cursor:"pointer"}} className="fas fa-trash"></i> </p>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

export default CardsDetails;
