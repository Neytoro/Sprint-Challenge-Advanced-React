import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { DarkMode } from './DarkMode.js';

const KidsModal = (props) => {
  const {
    name,
    country,
    searches,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const [enabled, setEnabled, enable] = DarkMode(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{name}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => {toggle(); enable(!enabled);}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default KidsModal;