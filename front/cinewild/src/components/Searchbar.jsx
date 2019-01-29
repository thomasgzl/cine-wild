import React, { Component } from 'react';
import { Input, Button, Container, Row } from 'reactstrap';
import { Link } from "react-router-dom";
import './Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div className="Search">
        <Container fluid>
        <Row className="search">
        <Input className="search-bar" placeholder="search" />

        <Link className="type-search" to="/films">
        <Button className="search-button" type="button" color="warning"> <i class="fas fa-search"></i> </Button>
        </Link>

        <Link className="type-search" to="/movie/type/action">
        <Button className="filter-button" type="button" color="warning"> action </Button>
        </Link>

        <Link className="type-search" to="/movie/type/comedy">
        <Button className="filter-button" type="button" color="warning"> comedy </Button>
        </Link>

        <Link className="type-search" to="/movie/type/drama">
        <Button className="filter-button" type="button" color="warning"> drama </Button>
        </Link>

        <Link className="type-search" to="/movie/type/anime">
        <Button className="filter-button" type="button" color="warning"> anime </Button>
        </Link>

        <Link className="type-search" to="/movie/type/animation">
        <Button className="filter-button" type="button" color="warning"> animation </Button>
        </Link>

        </Row>
        </Container>
      </div>
    );
  }
}
 
export default Searchbar;