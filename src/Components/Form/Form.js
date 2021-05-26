import React, { Component } from "react";
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      date: "",
      time: "",
      number: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: Number(this.state.number)
    }
    this.props.addNewReservation(newReservation)
    this.setState({name: "", date: "", time: "", number: ""})
    console.log(this.state)
  }

  render () {
    return (
        <form className= "form-container" onSubmit={this.submitReservation}>
          <input
                 type="text"
                 placeholder="Name"
                 value={this.state.name}
                 name="name"
                 onChange={this.handleChange} />
          <input
                 type="text"
                 placeholder="Date (mm/dd)"
                 value={this.state.date}
                 name="date"
                 onChange={this.handleChange} />
          <input
                 type="text"
                 placeholder="Time"
                 value={this.state.time}
                 name="time"
                 onChange={this.handleChange} />
          <input
                 type="number"
                 placeholder="Number of Guests"
                 value={this.state.number}
                 name="number"
                 onChange={this.handleChange} />
          <div>
            <button className="submit-button" type="submit">Make Reservation</button>
          </div>
        </form>
    )
  }
}

export default Form