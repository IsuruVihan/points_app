import React, {FC} from 'react';
import {Col, Row} from "react-bootstrap";
import Team from "./team/Team";
import ITeam from "../../interface/ITeam";

type TeamsProps = {
  teamList: ITeam[],
  add: (id: number, points: number) => void,
  sub: (id: number, points: number) => void,
};

const Teams: FC<TeamsProps> = (props) => {
  const {teamList, add, sub} = props;
  let teamNumber: number = 0;

  const handleOnClickAddPoints = (id: number, points: number) => add(id, points);

  const handleOnClickSubPoints = (id: number, points: number) => sub(id, points);

  const renderTeamList = () => {
    return (
      teamList.map((team) => {
        return (
          <Team
            add={handleOnClickAddPoints}
            sub={handleOnClickSubPoints}
            id={team.id}
            name={team.name}
            points={team.points}
            key={teamNumber++}
          />
        );
      })
    );
  }

  return (
    <Col className="px-0 teams" md={8} sm={12} xs={12}>
      <Row className="mx-0 grid">
        {renderTeamList()}
      </Row>
    </Col>
  );
}

export default Teams;