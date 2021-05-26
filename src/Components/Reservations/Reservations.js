import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard"
import "./Reservations.css"

const Reservations = ({ reservations }) => {
  const reservationBookings = reservations.map(reservation => {
    return <ReservationCard
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
        />
  })

  return (
      <section className="resy-container">
        {reservationBookings}
      </section>
  )
}

export default Reservations;