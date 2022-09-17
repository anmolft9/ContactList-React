import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export const ListContact = ({ contact }) => {
  return (
    <Row>
      <Col>
        <div className="m-5">
          {contact.map((item) => {
            return (
              <Card border="warning" style={{ width: "70rem" }}>
                <Card.Header className="text-center">
                  User Name : {item.username}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Name: {item.name} </Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item variant="info">
                        Email: {item.email}
                      </ListGroup.Item>
                      <ListGroup.Item variant="primary">
                        Phone: {item.phone}{" "}
                      </ListGroup.Item>
                      <ListGroup.Item variant="success">
                        Address: {item.address.suite} {item.address.street}{" "}
                        {item.address.city} {item.address.zipcode}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};
