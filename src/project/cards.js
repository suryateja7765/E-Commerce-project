
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './cardsData';
import {useDispatch} from 'react-redux'
import { Add } from '../redux/action';

export default function Carts() {
    const [data, setData] = useState(Cardsdata);

    const dispatch=useDispatch()

    const send =(e)=>{
        dispatch(Add(e))
    }

    return (
        <div className='cards-container'>
            <h2 style={{ textAlign: "center", border: "2px solid orange", backgroundColor: "yellow" }}>
                Btech-Vala Restaurant
            </h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                {data.map((element, id) => {
                return(
                    <div key={id} style={{ width: '360px', margin: '10px', height:"500px" }}>
                        <Card style={{ border: "none" , boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.5)"}}>
                            <Card.Img src={element.imgdata} style={{ height: "16rem",cursor: "pointer",transition:" 3s",}} />
                            <Card.Body>
                                <Card.Title>{element.rname}</Card.Title>
                                <Card.Text>
                                    <b>price</b>:₹{element.price}
                                </Card.Text>
                                <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
                                <Button variant="warning" onClick={()=> send(element)} >Add To Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
)})}
            </div>
        </div>
    );
}




