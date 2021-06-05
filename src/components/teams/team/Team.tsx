import React, {FC, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import NullPointsModal from "../models/NullPointsModal";

type TeamProps = {
  add: (id: number, points: number) => void,
  sub: (id: number, points: number) => void,
  id: number,
  name: string,
  points: number
};

const Team: FC<TeamProps> = (props) => {
  const {add, sub, id, name, points} = props;

  const [enteredPoints, setEnteredPoints] = useState<string | undefined>("");
  const handleOnChangePoints = (points: string | undefined) => {
    setEnteredPoints(points);
  }

  const [openNullPointsModal, setOpenNullPointsModal] = useState<boolean>(false);
  const handleOnCloseNullPointsModal = () => setOpenNullPointsModal(false);

  const handleOnClickAddPoints = () => {
    if (enteredPoints === "") {
      setOpenNullPointsModal(true);
      setTimeout(
        () => setOpenNullPointsModal(false),
        2500
      );
      return;
    }
    add(id, enteredPoints === undefined ? 0: parseInt(enteredPoints));
    setEnteredPoints("");
  }

  const handleOnClickSubPoints = () => {
    if (enteredPoints === "") {
      setOpenNullPointsModal(true);
      setTimeout(
        () => setOpenNullPointsModal(false),
        2500
      );
      return;
    }
    sub(id, enteredPoints === undefined ? 0: parseInt(enteredPoints));
    setEnteredPoints("");
  }

  return (
    <Col xl={4} sm={6} xs={12} className="px-3 py-5 team">
      <NullPointsModal
        isVisible={openNullPointsModal}
        close={handleOnCloseNullPointsModal}
      />
      <Row className="mx-0 details">
        <Col className="px-0 team-name" xs={12}>{name}</Col>
        <Col className="px-0 team-points" xs={12}>$ {points}</Col>
      </Row>
      <Row  className="mx-0 points-form">
        <Col className="px-0 pt-3 points-input-container" xs={12}>
          <CurrencyInput
            className="points-input"
            prefix={'$'}
            onValueChange={
              (value: string | undefined) => {
                handleOnChangePoints(value);
              }
            }
            value={enteredPoints}
          />
        </Col>
        <Col className="px-0 buttons" xs={12}>
          <Row className="mx-0 pt-3 button-group">
            <Col className="px-0 sub-btn-container" xs={6}>
              {
                points > 0 &&
                <Button
                    className="sub-btn"
                    size="sm"
                    variant="danger"
                    onClick={() => handleOnClickSubPoints()}
                >
                    Sub
                </Button>
              }
            </Col>
            <Col className="px-0 add-btn-container" xs={6}>
              <Button
                className="add-btn float-right"
                size="sm"
                variant="success"
                onClick={() => handleOnClickAddPoints()}
              >
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