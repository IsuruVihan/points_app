import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type PointsSubbedModalProps = {
  isVisible: boolean,
  close: () => void,
  teamName: string,
  subbedAmount: number
};

const PointsSubbedModal: FC<PointsSubbedModalProps> = (props) => {
  const {isVisible, close, teamName, subbedAmount} = props;

  return (
    <Modal show={isVisible} onHide={() => close()}>
      <Modal.Body className="text-center">
        <b>$ {subbedAmount.toLocaleString()}</b> points subtracted from team <b>{teamName}</b>!
      </Modal.Body>
    </Modal>
  );
}

export default PointsSubbedModal;