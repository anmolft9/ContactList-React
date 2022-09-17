import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export const ListContact = ({ contact }) => {
  return (
    <Row>
      <Col>
        <div className="m-5">
          {contact.map((item) => {
            return (
              <Card border="info" style={{ width: "70rem" }}>
                <Card.Header className="text-center">
                  User Name : {item.username}
                </Card.Header>
                <Card.Body>
                  <Card.Title>Name: {item.name} </Card.Title>
                  <Card.Text>
                    <ListGroup>
                      <ListGroup.Item>Email: {item.email}</ListGroup.Item>
                      <ListGroup.Item>Phone: {item.phone} </ListGroup.Item>
                      <ListGroup.Item>
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
