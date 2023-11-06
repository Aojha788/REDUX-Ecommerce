import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
           
          AVANISH OJHA COMPANY
          </p>
          <p>
           CODEGAMA PROJECT
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
