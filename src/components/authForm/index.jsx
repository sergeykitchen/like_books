import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import "./styles.scss";

const AuthForm = ({ isLoading, label, isSignIn, submit }) => {
  const [fields, setFields] = useState({ email: "", password: "", name: "" });

  const submitForm = e => {
    e.preventDefault();
    submit(fields);
  };

  const changeHandler = e => {
    const input = e.currentTarget;
    setFields({
      ...fields,
      [input.name]: input.value
    });
  };

  return (
    <div className="form_container">
      <Form onSubmit={submitForm}>
        {!isSignIn && (
          <Form.Group as={Row} controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
                name="name"
                onChange={changeHandler}
                placeholder="name"
                type="text"
                defaultValue=""
              />
            </Col>
          </Form.Group>
        )}
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              autoComplete="new-password"
              required
              name="email"
              onChange={changeHandler}
              placeholder="email"
              type="email"
              defaultValue=""
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              autoComplete="new-password"
              required
              name="password"
              onChange={changeHandler}
              type="password"
              placeholder="Password"
              defaultValue=""
            />
          </Col>
        </Form.Group>
        <Button
          block
          size="sm"
          variant="primary"
          type="submit"
          disabled={isLoading}
        >
          {label}
        </Button>
      </Form>
    </div>
  );
};

export default AuthForm;
