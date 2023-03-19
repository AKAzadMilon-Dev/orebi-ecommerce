import React from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Button from "../components/layout/Button";
import Container from "../components/layout/Container";
import InputBox from "../components/layout/InputBox";

const Contact = () => {
  return (
    <>
      <Container>
        <BreadCrumb />
        <div className="mt-32">
          <h2 className="mb-8 font-dm text-4xl font-bold text-primary">
            Fill up a Form
          </h2>
          <InputBox as="input" placeholder="Your name here" title="Name" />
          <InputBox as="input" placeholder="Your email here" title="Email" />
          <InputBox
            as="textArea"
            placeholder="Your message here"
            title="Message"
          />
          <Button title="Post"/>
        </div>
      </Container>
    </>
  );
};

export default Contact;
