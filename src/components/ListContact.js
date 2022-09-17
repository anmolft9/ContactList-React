import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export const ListContact = ({ contact }) => {
  return (
    <div className="mt-5">
      {contact.map((item) => {
        return (
          <Card border="primary" className="">
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
  );
};
