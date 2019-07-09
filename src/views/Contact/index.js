import React, { Component } from "react";
import { Form } from "../../components/Form";
import ConIntro from "../../components/ConIntro";


class Contact extends Component {
  onSubmit = fields => {
    console.log("app got", fields);
  };
  render() {
    return (
      <div className="contact-wrap">
        <ConIntro />
        <div>
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
      </div>
    )
  }
}


export default Contact;



