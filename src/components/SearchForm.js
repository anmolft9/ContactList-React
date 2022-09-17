import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const sub = (e) => {
    e.preventDefault();

    handleOnSubmit(str);
  };

  return (
    <div className="head">
      <h1 clasName="text-center header">Contact List</h1>
      <Form className="mt-3" onSubmit={sub}>
        <Row>
          <Col>
            <Form.Control placeholder="User Name?" onChange={handleOnChange} />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
