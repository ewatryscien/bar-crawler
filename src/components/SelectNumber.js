import React from "react";
import Form from "react-bootstrap/Form";

const SelectNumber = (props) => {
  const { label } = props;

  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Select className="form-select" aria-label="Default select example">
        <option>Choose amount</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
    </div>
  );
};

export default SelectNumber;
