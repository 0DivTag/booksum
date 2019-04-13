import React, { Component } from "react";
import Books from "../../data/books.json";
import styles from "./Text.module.css";
import CopyIcon from "../../CopyIcon.svg";

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: [],
      wordsPerParagraph: 20,
      copyState: false
    };
    // props = Paragraphs (5)
  }

  getLorem = () => {
    const wordCount = this.state.wordsPerParagraph * this.props.Paragraphs;
    let wordArray = [];
    let slicedArray = [];

    // get random book objects from books.json and save them in wordArray
    for (let i = 0; i < wordCount; i++) {
      let randomNumber = Math.floor(Math.random() * Books.length);
      wordArray[i] = Books[randomNumber].title;
    }

    // concat 20 words from wordArray and join them together in one Array `slicedArray`
    for (let i = 0; i < this.props.Paragraphs; i++) {
      if (i === 0) slicedArray[i] = wordArray.slice(0, 20).join(" ");
      else slicedArray[i] = wordArray.slice(i * 20, i * 20 + 20).join(" ");
    }

    // insert paragraphs into the Word Arrays
    slicedArray = slicedArray.map((book, index) => {
      return <p key={index}>{book}</p>;
    });

    this.setState({ text: slicedArray });
  };

  componentDidMount() {
    this.getLorem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.Paragraphs !== prevProps.Paragraphs) {
      this.getLorem();
    }
  }

  copyToClipboard = e => {
    e.preventDefault();
    const el = document.createElement("textarea");
    for (let i = 0; i < this.props.Paragraphs; i++) {
      el.value += `${this.state.text[i].props.children} \n`;
    }
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    this.setState({ copyState: true });
  };

  render() {
    return (
      <div>
        <img
          src={CopyIcon}
          className={styles.Icon}
          alt="Copy Icon"
          onClick={this.copyToClipboard}
        />
        {this.state.copyState ? (
          <div className={styles.CopySuccess}>Copied!</div>
        ) : null}
        <section className={styles.Box}>
          <div className={styles.Text}>{this.state.text}</div>
        </section>
      </div>
    );
  }
}

export default Text;
