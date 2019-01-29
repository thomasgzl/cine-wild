import React, { Component } from 'react';
import {
  Card,
  CardText, 
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
} from "reactstrap";
import './Films.css';
import './Filters.css';

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [], }
  }

  componentDidMount() {

    // Récupération des films via fetch
    fetch("http://localhost:5000/films/action")
        .then(response => response.json())
        .then(data => {
            // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
            this.setState({
              data: data,
            });
        })
};


  render() { 
    return ( 
      <div>
        <h1 className="filters-title"> ACTION MOVIES </h1>
      <Container className="cont">
      <Row>
      {this.state.data.map((film) =>
        <Card className="card">
          <CardBody>
            <CardTitle>{film.name}</CardTitle>
            <CardSubtitle>{film.category}</CardSubtitle>
          </CardBody>
          <img className="poster"
            width="100%"
            src={film.poster}
            alt="Card"
          />
          <CardBody>
            <CardText>
              {film.description}
            </CardText>
            <CardText className="note">
              {`${film.note}/10`}
            </CardText>
          </CardBody>
        </Card>
      )}
        </Row>
      </Container>
    </div>
     );
  }
}

export default Action;
