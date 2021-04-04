import React from "react";
import { Navbar, Button, Form, Col, FormControl, Card, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import ItemCard from "../ItemCard/ItemCard";
import CardList from '../../containers/CardList/CardList'


import '../style.css'

const Homepage = () => {
  return (
    <div className="video">
    <video autoPlay loop muted >
      <source src="./video01.mp4" type="video/mp4" height="100%" width="100%" />
    </video>
    <div>
    
  
        
        <div className="container" >

          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Chercher Toutes les catégories" />
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-warning"
                    title="Toutes les catégories "
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">carrosserie</Dropdown.Item>
                    <Dropdown.Item href="#">moteur</Dropdown.Item>
                    <Dropdown.Item href="#">accessoire</Dropdown.Item>
                    <Dropdown.Divider />
                  </DropdownButton>
                </InputGroup>
              </Col>


              <Col>
                <div className="search-btn">
                  <Button >chercher</Button>
                </div>
              </Col>

            </Form.Row>
          </Form>

        </div>
        <div style={{ height: "100%" }}></div>
      </div>
      <CardList />
    </div>


  );
};

export default Homepage;

