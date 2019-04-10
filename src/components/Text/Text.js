import React, { Component } from "react";
import Books from "../../data/books.json";
import styles from "./Text.module.css";

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = { titles: "" };
  }

  componentDidMount() {
    let Bla = Books.map(book => {
      return book.title;
    }).join(" ");
    this.setState({ titles: Bla });
  }

  render() {
    return (
      <section className={styles.Box}>
        <div className={styles.Text}>{this.state.titles}</div>
      </section>
    );
  }
}

export default Text;
