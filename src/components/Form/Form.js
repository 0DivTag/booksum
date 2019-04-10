import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.FormValue };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className={styles.Input}
          />
        </label>
        <h3 className={styles.Title}>Paragraphs</h3>
      </form>
    );
  }
}

export default Form;
