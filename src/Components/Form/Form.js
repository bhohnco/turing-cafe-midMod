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


        </form>
    )
  }
}

export default Form