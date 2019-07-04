import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MyNavbar extends Component {
  handleQuery = (e) => {
    this.props.dispatch({ type: 'query', q: e.target.value });
  };
  render() {
    return (
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#home">GOT IT!</Navbar.Brand>
        <Navbar.Collapse>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={(e) => {
                this.handleQuery(e);
              }}
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav className="mr-auto">
          <Link to={`/`}>Home</Link>
          <Link to={`/createdeck`}>Create Deck</Link>
        </Nav>
      </Navbar>
    );
  }
  1;
}
const mapStateToProps = (state) => ({
  query: state.query,
});
export { MyNavbar };
