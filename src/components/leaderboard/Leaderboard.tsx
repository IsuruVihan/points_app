import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

const Leaderboard: FC = () => {
  return (
    <Col className="px-0 mt-sm-5 leaderboard" md={4} sm={12} xs={12}>
      <Row className="mx-0 teams">
        <Col className="px-0 py-4 text-center title" xs={12}>
          Leaderboard
        </Col>
        <Col className="px-0 body" xs={12}>
          <Row className="mx-0 py-2 team-row">
            <Col className="px-0 text-center team-name" xs={6}>
              Team name
            </Col>
            <Col className="px-0 text-center team-points" xs={6}>
              Team points
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default Leaderboard;