import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <Container fluid>
      <Row>
        <Col md={{ size: 4 }} className="mb-md-4 mt-md-4">
          <ul>
            <li><h4 className="titlefooter">Help</h4></li>
            <li>Need Help</li>
            <li>Documentation</li>
          </ul>
        </Col>
        <Col md={{ size: 4 }} className="mb-md-4 mt-md-4">
          <ul>
            <li><h4 className="titlefooter">Informations</h4></li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </Col>
        <Col md={{ size: 4 }} className="mb-4 mt-4">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-google-plus-square"></i>
          </a>
        </Col>
      </Row>

    </Container>
  </div>
);

export default Footer;
