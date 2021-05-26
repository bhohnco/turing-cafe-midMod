import React from "react"
import './ReservationCard.css';

const ReservationCard = (props) => {
  return (
      <article className="reservation-card" id={props.id} >
        <h2>{props.name}</h2>
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>Number of Guests: {props.number}</p>
        <button className="cancel-res-button">Cancel</button>
      </article>
  )
}

export default ReservationCard;