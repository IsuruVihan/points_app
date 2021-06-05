import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type NullPointsModalProps = {
  isVisible: boolean,
  close: () => void
};

const NullPointsModal: FC<NullPointsModalProps> = (props) => {
  const {isVisible, close} = props;

  return (
    <Modal show={isVisible} onHide={() => close()}>
      <Modal.Body className="text-center">
        Points field is required!
      </Modal.Body>
    </Modal>
  );
}

export default NullPointsModal;