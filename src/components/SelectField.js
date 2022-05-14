import React from "react";
import Form from "react-bootstrap/Form";

const SelectField = (props) => {
  const { label } = props;
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Select className="form-select" aria-label="Default select example">
        <option>Choose a bar</option>
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
      </Form.Select>
    </div>
  );
};

export default SelectField;
