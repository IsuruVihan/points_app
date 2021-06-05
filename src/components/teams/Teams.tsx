import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import Team from "./team/Team";

const Teams: FC = () => {
  return (
    <Col style={{border: "2px solid green"}} className="px-0 teams" md={8} sm={12} xs={12}>
      <Row className="mx-0 grid">
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
        <Team />
      </Row>
    </Col>
  );
}

export default Teams;