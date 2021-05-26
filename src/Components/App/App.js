import React, { Component } from "react";
import './App.css';
import Reservations from "../Reservations/Reservations"
import Form from '../Form/Form'
import { callReservationApi, postReservationApi } from "../../APICalls";


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ""
    }
  }

  componentDidMount() {
    callReservationApi()
        .then(data => {
          this.setState({reservations: [...this.state.reservations, ...data]})
        })
        .catch(error => {
          this.setState({error: "Were sorry, something went wrong"})
        })
  }

  addNewReservation = (newReservation) => {
          this.setState({reservations: [...this.state.reservations, newReservation]})
    postReservationApi(newReservation)
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