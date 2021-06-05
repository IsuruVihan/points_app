import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

type TopTeamProps = {
  teamName: string,
  teamPoints: number
};

const TopTeam: FC<TopTeamProps> = (props) => {
  const {teamName, teamPoints} = props;

  return (
    <Row className="mx-0 py-2 top-team-row">
      <Col className="px-0 text-center top-team-name" xs={6}>
        <b>{teamName}</b>
      </Col>
      <Col className="px-0 text-center top-team-points" xs={6}>
        <b>$ {teamPoints.toLocaleString()}</b>
      </Col>
    </Row>
  );
}

export default TopTeam;