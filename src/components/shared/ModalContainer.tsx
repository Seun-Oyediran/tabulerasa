import React, { ReactNode } from 'react';
import { Modal } from 'react-bootstrap';

interface IProps {
  children: ReactNode;
  show: boolean;
  handleClose: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}

const ModalContainer = (props: IProps) => {
  const {
    children, handleClose, show, size, centered,
  } = props;
  return (
    <Modal show={show} onHide={handleClose} size={size || 'lg'} centered={centered}>
      {children}
    </Modal>
  );
};

export default ModalContainer;
