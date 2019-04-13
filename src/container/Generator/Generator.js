import React, { Component } from "react";
import styles from "./Generator.module.css";
import Form from "../../components/Form/Form";
import Text from "../../components/Text/Text";

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = { FormValue: 3 };
  }

  handleSubmit = Value => {
    this.setState({ FormValue: Value });
  };

  render() {
    return (
      <main className={styles.Main}>
        <Form FormValue={this.state.FormValue} onSubmit={this.handleSubmit} />
        <Text Paragraphs={this.state.FormValue} />
      </main>
    );
  }
}

export default Generator;
