import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      poster: '',
      description: '',
      note: 0,
    };

    this.inputChange = this.inputChange.bind(this);
    this.sendMovie = this.sendMovie.bind(this);
  }

  inputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  sendMovie() {
    const data = {
        name: this.state.name,
        category: this.state.category,
        poster: this.state.poster,
        description: this.state.description,
        note: this.state.note,
    }
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    const url = "http://localhost:5000/film/add";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Movie send successful!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Error, cannot send a movie, try Again...");
      });
  }

  render() {
    return (
      <div className="add">
        <h1 className="filters-title">ADD A MOVIE</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="name"
              name="name"
              id="exampleName"
              placeholder="name"
              onChange={this.inputChange}
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Select">Category</Label>
            <Input
              type="select"
              name="category"
              id="exampleSelect"
              onChange={this.inputChange}
              value={this.state.category}
            >
              <option>action</option>
              <option>drama</option>
              <option>comedy</option>
              <option>animation</option>
              <option>anime</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Poster</Label>
            <Input
              type="link"
              name="poster"
              id="examplePoster"
              placeholder="https://www.examplelink.com/e5ed1337"
              onChange={this.inputChange}
              value={this.state.poster}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="exampleText"
              onChange={this.inputChange}
              value={this.state.description}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Note /10</Label>
            <Input
              type="select"
              name="note"
              id="exampleSelect"
              onChange={this.inputChange}
              value={this.state.note}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </FormGroup>
          <Button color="warning" onClick={this.sendMovie}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add;
