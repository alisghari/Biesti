import React from 'react'
import { Navbar, Button, Form, Col, FormControl, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import axios from 'axios'



const ItemCard = ({ card,handleDelete }) => {
    return (
        <div className="cards">

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.image}/>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.price} DT
                </Card.Text>
                <Button variant="primary">Voir plus</Button>
                <Button variant="outline-danger" onClick={handleDelete} >Delete</Button>
            </Card.Body>
        </Card>
</div>
    )
}

ItemCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string
}

export default ItemCard
