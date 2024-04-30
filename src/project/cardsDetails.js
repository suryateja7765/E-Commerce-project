import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Navbar";
import { useParams,useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { removeItem,Add, REMOVE } from "../redux/action";

function CardsDetails() {
 const [data,setData]=useState([])

  const {id}= useParams();

  const history=useNavigate( )
  // removeItem
  const dispatch = useDispatch()


  const getData = useSelector((state) => state.CartReducer.carts);
  // console.log(getData);
  const compare =()=>{
    let compareData=getData.filter((e)=>{
      return e.id == id
    })
    setData(compareData)
  }

  useEffect(()=>{
  compare()
  },[id])

//add data increment
const send =(e)=>{
  dispatch(Add(e))
}

  // remove items function

  const handleRemove=(id)=>{
    dispatch(removeItem(id))
    history("/")
  }

  //data decrement
const remove=(item)=>{
  dispatch(REMOVE(item))
}

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
            {
              data.map((ele)=>{
                return(
                  <>
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
                  style={{ width: "300px" }}
                  src={ele.imgdata}
                ></img>
              </div>
              <div
                className="details"
                style={{ marginLeft: "70px", marginTop: "30px" }}
              >
                <Table>
                  <tr >
                    <td >
                      <p><b>Order:</b> {ele.rname}</p>
                      <p><b>Price:</b> ₹{ele.price}</p>
                      <p><b>Dishes:</b> {ele.address}</p>
                      <p><b>Total:</b> ₹{ele.price * ele.qnty}</p>
                      {/* increment and decrement---- */}
                      <div style={{marginTop:"5px",display:"flex", justifyContent:"space-between",alignItems:"center",width:100, cursor:"pointer", color:"black", backgroundColor:"grey"}}>
                      <span style={{fontSize:"24px"}} onClick={ele.qnty <=1 ? ()=>handleRemove(ele.id) : ()=>remove(ele)}>-</span>
                      <span style={{fontSize:"22"}}>{ele.qnty}</span>
                      <span style={{fontSize:"24"}} onClick={()=>send(ele)}>+</span>
                      </div>
                    </td>
                    <td >
                      <p><b>Rating:</b><span style={{backgroundColor:"green", padding:"2px 5px ", borderRadius:"5px" , color:"#fff"}}>{ele.rating}★</span></p>
                      <p><b>Review:</b> {ele.somedata}</p>
                      <p style={{padding:"px"}}><b>Remove:</b> <i style={{color:"red", fontSize:"20px", cursor:"pointer"}} className="fas fa-trash" onClick={()=>handleRemove(ele.id)}></i> </p>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
                  </>
                )
              })
            }
           
          </section>
        </div>
      </>
    </div>
  );
}

export default CardsDetails;


