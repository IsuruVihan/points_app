import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type PointsAddedModalProps = {
  isVisible: boolean,
  close: () => void,
  teamName: string,
  addedAmount: number
};

const PointsAddedModal: FC<PointsAddedModalProps> = (props) => {
  const {isVisible, close, teamName, addedAmount} = props;

  return (
    <Modal show={isVisible} onHide={() => close()}>
      <Modal.Body className="text-center">
        {addedAmount} points added to team {teamName}!
      </Modal.Body>
    </Modal>
  );
}

export default PointsAddedModal;