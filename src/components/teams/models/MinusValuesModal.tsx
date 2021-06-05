import React, {FC} from 'react';
import {Modal} from 'react-bootstrap';

type MinusValuesModalProps = {
  isVisible: boolean,
  close: () => void
};

const MinusValuesModal: FC<MinusValuesModalProps> = (props) => {
  const {isVisible, close} = props;

  return (
    <Modal show={isVisible} onHide={() => close()}>
      <Modal.Body className="text-center">
        Points cannot be <b>negative</b>!
      </Modal.Body>
    </Modal>
  );
}

export default MinusValuesModal;