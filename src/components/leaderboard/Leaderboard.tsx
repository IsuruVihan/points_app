import React, {FC, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ITeam from "../../interface/ITeam";
import Team from "./team/Team";
import TopTeam from "./team/TopTeam";

type LeaderboardProps = {
  teamList: ITeam[]
};

const Leaderboard: FC<LeaderboardProps> = (props) => {
  const {teamList} = props;

  const [teams, setTeams] = useState<ITeam[]>([]);

  let isTopTeam: boolean = true;

  useEffect(() => {
    const teamListCopy = teamList.slice();
    teamListCopy.sort((a, b) => {
      return b.points - a.points;
    });
    setTeams(teamListCopy);
  }, [teamList]);

  return (
    <Col className="px-0 mt-sm-5 leaderboard" md={4} sm={12} xs={12}>
      <Row className="mx-0 teams">
        <Col className="px-0 py-4 text-center title" xs={12}>
          Leaderboard
        </Col>
        <Col className="px-0 body" xs={12}>
          {teams.map((team) => {
            if (isTopTeam) {
              isTopTeam = false;
              return <TopTeam teamName={team.name} teamPoints={team.points}/>
            } else {
              return <Team teamName={team.name} teamPoints={team.points}/>
            }
          })}
        </Col>
      </Row>
    </Col>
  );
}

export default Leaderboard;