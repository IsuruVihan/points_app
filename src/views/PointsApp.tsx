import React, {FC} from 'react';
import {Container, Row} from "react-bootstrap";
import Teams from "../components/teams/Teams";
import Leaderboard from "../components/leaderboard/Leaderboard";
import "../assets/styles/PointsApp.scss";

const PointsApp: FC = () => {
  return (
    <Container className="main" style={{border: "2px solid red"}} fluid>
      <Row style={{border: "2px solid blue"}} className="mx-0 p-3 main-row">
        <Teams />
        <Leaderboard />
      </Row>
    </Container>
  );
}

export default PointsApp;