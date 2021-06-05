import React, {FC, useState} from 'react';
import {Container, Row} from "react-bootstrap";
import Teams from "../components/teams/Teams";
import Leaderboard from "../components/leaderboard/Leaderboard";
import "../assets/styles/PointsApp.scss";
import ITeam from "../interface/ITeam";
import MinusValuesModal from "../components/teams/models/MinusValuesModal";
import PointsAddedModal from "../components/teams/models/PointsAddedModal";
import PointsSubbedModal from "../components/teams/models/PointsSubbedModal";
import SubMorePointsModal from "../components/teams/models/SubMorePointsModal";

const PointsApp: FC = () => {
  const [teamList, setTeamList] = useState<ITeam[]>([
    {id: 0, name: "Reactors", points: 0},
    {id: 1, name: "Bit Masters", points: 0},
    {id: 2, name: "Binary Knights", points: 0},
    {id: 3, name: "Kit Kat", points: 0},
    {id: 4, name: "Phoenix", points: 0},
    {id: 5, name: "Unity", points: 0}
  ]);

  const [teamName, setTeamName] = useState<string | null>(null);

  const [points, setPoints] = useState<number | null>(null);

  const [openMinusValuesModal, setOpenMinusValuesModal] = useState<boolean>(false);
  const handleOnCloseMinusValuesModal = () => setOpenMinusValuesModal(false);

  const [openPointsAddedModal, setOpenPointsAddedModal] = useState<boolean>(false);
  const handleOnClosePointsAddedModal = () => setOpenPointsAddedModal(false);

  const [openPointsSubbedModal, setOpenPointsSubbedModal] = useState<boolean>(false);
  const handleOnClosePointsSubbedModal = () => setOpenPointsSubbedModal(false);

  const [openSubMorePointsModal, setOpenSubMorePointsModal] = useState<boolean>(false);
  const handleOnCloseSubMorePointsModal = () => setOpenSubMorePointsModal(false);

  const addPoints = (id: number, points: number) => {
    if (points < 0) {
      setOpenMinusValuesModal(true);
      setTimeout(
        () => setOpenMinusValuesModal(false),
        2500
      );
      return;
    }
    const teamListCopy: ITeam[] = teamList.slice();
    teamListCopy[id].points += points;
    setTeamList(teamListCopy);
    setOpenPointsAddedModal(true);
    setTeamName(teamListCopy[id].name);
    setPoints(points);
    setTimeout(
      () => {
        setOpenPointsAddedModal(false);
        setTeamName(null);
        setPoints(null);
      },
      2500
    );
  }

  const subPoints = (id: number, points: number) => {
    if (points < 0) {
      setOpenMinusValuesModal(true);
      setTimeout(
        () => setOpenMinusValuesModal(false),
        2500
      );
      return;
    }
    const teamListCopy: ITeam[] = teamList.slice();
    if (teamListCopy[id].points < points) {
      setOpenSubMorePointsModal(true);
      setTeamName(teamListCopy[id].name);
      setPoints(teamListCopy[id].points);
      setTimeout(
        () => {
          setOpenSubMorePointsModal(false);
          setTeamName(null);
          setPoints(null);
        },
        2500
      );
      return;
    }
    teamListCopy[id].points -= points;
    setTeamList(teamListCopy);
    setOpenPointsSubbedModal(true);
    setTeamName(teamListCopy[id].name);
    setPoints(points);
    setTimeout(
      () => {
        setOpenPointsSubbedModal(false);
        setTeamName(null);
        setPoints(null);
      },
      2500
    );
  }

  return (
    <Container className="main" fluid>
      <MinusValuesModal
        isVisible={openMinusValuesModal}
        close={handleOnCloseMinusValuesModal}
      />
      <PointsAddedModal
        isVisible={openPointsAddedModal}
        close={handleOnClosePointsAddedModal}
        teamName={teamName === null ? "" : teamName}
        addedAmount={points === null ? 0 : points}
      />
      <PointsSubbedModal
        isVisible={openPointsSubbedModal}
        close={handleOnClosePointsSubbedModal}
        teamName={teamName === null ? "" : teamName}
        subbedAmount={points === null ? 0 : points}
      />
      <SubMorePointsModal
        isVisible={openSubMorePointsModal}
        close={handleOnCloseSubMorePointsModal}
        teamName={teamName === null ? "" : teamName}
        points={points === null ? 0 : points}
      />
      <Row className="mx-0 p-3 main-row">
        <Teams
          teamList={teamList}
          add={addPoints}
          sub={subPoints}
        />
        <Leaderboard
          teamList={teamList}
        />
      </Row>
    </Container>
  );
}

export default PointsApp;