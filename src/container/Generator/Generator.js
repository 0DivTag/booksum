import React, { Component } from "react";
import styles from "./Generator.module.css";
import Form from "../../components/Form/Form";
import Text from "../../components/Text/Text";

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = { FormValue: 5, paragraphs: 5 };
  }

  handleSubmit = FormValue => {
    this.setState({ paragraphs: FormValue });
    console.log(this.state.paragraphs);
  };

  render() {
    return (
      <main className={styles.Main}>
        <Form FormValue={this.state.FormValue} onSubmit={this.handleSubmit} />
        <Text Paragraphs={this.state.paragraphs} />
      </main>
    );
  }
}

export default Generator;
