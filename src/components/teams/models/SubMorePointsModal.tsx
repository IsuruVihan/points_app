import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type SubMorePointsModalProps = {
  isVisible: boolean,
  close: () => void,
  teamName: string,
  points: number
};

const SubMorePointsModal: FC<SubMorePointsModalProps> = (props) => {
  const {isVisible, close, teamName, points} = props;

  return (
    <Modal show={isVisible} onHide={() => close()}>
      <Modal.Body className="text-center">
        Cannot subtract more than <b>$ {points.toLocaleString()}</b> points from team <b>{teamName}</b>!
      </Modal.Body>
    </Modal>
  );
}

export default SubMorePointsModal;