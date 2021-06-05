import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";

type TeamProps = {
  teamName: string,
  teamPoints: number
};

const Team: FC<TeamProps> = (props) => {
  const {teamName, teamPoints} = props;

  return (
    <Row className="mx-0 py-2 team-row">
      <Col className="px-0 text-center team-name" xs={6}>
        {teamName}
      </Col>
      <Col className="px-0 text-center team-points" xs={6}>
        $ {teamPoints.toLocaleString()}
      </Col>
    </Row>
  );
}

export default Team;