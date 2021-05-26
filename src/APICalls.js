const callReservationApi = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
}

const postReservationApi = (newReservation) => {
  fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newReservation)
  })
      .then(response => response.json())
}

export {
  callReservationApi,
  postReservationApi
}