import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SelectField from "./SelectField";
import SelectNumber from "./SelectNumber";

const SettingsForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Choose the route!</Form.Label>
        </Form.Group>
        <SelectField label="Starting point:" />
        <SelectField label="Ending point:" />
        <SelectNumber label="Number of bars:" />
        <Button variant="primary" type="submit">
          Go!
        </Button>
      </Form>
    </div>
  );
};

export default SettingsForm;
