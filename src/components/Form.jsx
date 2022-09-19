import React from "react";
import { Form, Input, Col, Row, FormGroup, Label, Button } from "reactstrap";

const Forms = () => {
    return(
        <>

<Form>
  <Row>
    <Col md={6} className="mt-3">
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="juan@perez.com"
          type="email"
        />
      </FormGroup>
    </Col>
  </Row>
  <Col md={6}>
      <FormGroup>
        <Label for="examplePassword">
          Nombre y Apellido
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="Juan Perez"
          type="text"
        />
      </FormGroup>
    </Col>
  <FormGroup>
    <Label for="exampleAddress">
      Dirección
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="El Salvador 977"
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
            Ciudad
        </Label>
        <Input
          id="exampleCity"
          name="Avellaneda"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          Provincia
        </Label>
        <Input
          id="exampleState"
          name="Buenos Aires"
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup check>
    <Input
      id="exampleCheck"
      name="check"
      type="checkbox"
    />
    <Label
      check
      for="exampleCheck"
    >
      Recordarme
    </Label>
  </FormGroup>
</Form>
        
        
        </>
    )
}

export default Forms;   