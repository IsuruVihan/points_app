import React, {FC} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";

const Team: FC = () => {
  return (
    <Col xl={4} sm={6} xs={12} className="px-3 py-5 team" style={{border: "2px solid cyan"}}>
      <Row className="mx-0 details">
        <Col className="px-0 team-name" xs={12}>
          Team Name
        </Col>
        <Col className="px-0 team-score" xs={12}>
          $ Team Score
        </Col>
      </Row>
      <Row  className="mx-0 points-form">
        <Col className="px-0 pt-3 score-input-container" xs={12}>
          <CurrencyInput className="score-input" prefix="$" />
        </Col>
        <Col className="px-0 buttons" xs={12}>
          <Row className="mx-0 pt-3 button-group">
            <Col className="px-0 sub-btn-container" xs={6}>
              <Button className="sub-btn" size="sm" variant="danger">
                Sub
              </Button>
            </Col>
            <Col className="px-0 add-btn-container" xs={6}>
              <Button className="add-btn float-right" size="sm" variant="success">
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Team;