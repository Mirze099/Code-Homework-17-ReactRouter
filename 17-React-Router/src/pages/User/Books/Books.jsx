import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { data, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Books() {
    const [data, setData] = useState([]);
    async function getData() {
        axios
            .get("http://localhost:5000/suppliers")
            .then((res) => setData(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getData();
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    {data.map((item) => (
                        <Col key={item.id} md={4} className="mb-4 mt-5">
                            <Card>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <div className="icons">
                                        <NavLink to={`/books/${item.id}`}>
                                            <Button variant="primary">Info</Button>
                                        </NavLink>
                                        <NavLink to="/favorites"><FontAwesomeIcon icon={faHeart} size="1x" /></NavLink>
                                        <NavLink to="/basket"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Books