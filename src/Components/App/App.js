import React, { Component } from "react";
import './App.css';
import Reservations from "../Reservations/Reservations"
import Form from '../Form/Form'


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ""
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        })
        .then(data => {
          this.setState({reservations: [...this.state.reservations, ...data]})
        })
        .catch(error => {
          this.setState({error: "Were sorry, something went wrong"})
        })
  }

  addNewReservation = (newReservation) => {
    fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newReservation)
    })
        .then(response => response.json())
        .then(data => {
          this.setState({reservations: [...this.state.reservations, data]})
        })
        .catch(error => this.setState({error: "Something went wrong with your reservation add, please try again"}))
  }


  render() {
    return (
        <div className="App">
          <h1 className="page-Title">Turing Cafe Reservations</h1>
          <div className="reservation-form">
            <Form addNewReservation = {this.addNewReservation}/>
          </div>
          <div className="reservation-container">
            <Reservations reservations={this.state.reservations}/>
          </div>
        </div>
    )
  }
}

export default App;