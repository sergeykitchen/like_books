import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { IAuthFormProps, IFieldsData } from "../../interfaces";

import "./styles.scss";

const nameField: IFieldsData = {
  name: "name",
  placeholder: "Name",
  type: "text",
  defaultValue: "",
  isRequired: true,
  label: "Name"
};

let fieldsData: IFieldsData[] = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    defaultValue: "",
    isRequired: true,
    label: "Email"
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    defaultValue: "",
    isRequired: true,
    label: "Password"
  }
];

const AuthForm: React.FC<IAuthFormProps> = ({
  isLoading,
  label,
  isSignUp,
  submit
}) => {
  const [fields, setFields] = useState({ email: "", password: "", name: "" });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    submit(fields);
  };

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    setFields({
      ...fields,
      [input.name]: input.value
    });
  };

  const getFormGroups = () => {
    const resData = isSignUp ? [nameField, ...fieldsData] : fieldsData;

    return resData.map((field, index) => {
      return (
        <Form.Group key={index} as={Row}>
          <Form.Label column sm="2">
            {field.name}
          </Form.Label>
          <Col sm="10">
            <Form.Control
              autoComplete="new-password"
              required={field.isRequired}
              name={field.name}
              onChange={changeHandler}
              placeholder={field.placeholder}
              type={field.type}
              defaultValue={field.defaultValue}
            />
          </Col>
        </Form.Group>
      );
    });
  };

  return (
    <div className="form_container">
      <Form autoComplete="new-password" onSubmit={submitForm}>
        {getFormGroups()}
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
