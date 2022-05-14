import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import SettingsForm from "../components/SettingsForm";
import SelectNumber from "../components/SelectNumber";

const StartPage = () => {
  const handleClick = (e) => {};

  return (
    <div>
      <h1>Pub crawl</h1>
      {/*<SettingsForm />
      var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function pickRandomQuestion(){
        var obj_keys = Object.keys(window.questionnaire);
        var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        window.selectedquestion = window.questionnaire[ran_key];
        console.log(window.selectedquestion);
        console.log(window.questionnaire);
}*/}

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Choose the route!</Form.Label>
        </Form.Group>
        <SelectNumber label="Number of bars:" />
        <Button onClick={handleClick} variant="primary" type="submit">
          Go!
        </Button>
      </Form>
    </div>
  );
};

export default StartPage;
