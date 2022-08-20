import React from 'react';
import { BackArrow } from '../../svg';

interface IProps {
  text?: string;
}

const BackButton = (props: IProps) => {
  const { text } = props;

  return (
    <div className="d-flex tabulerasa-back-btn gap-1 align-items-center">
      <button type="button" className="no-btn-style icon">
        <BackArrow />
      </button>
      <p>{text || 'Back'}</p>
    </div>
  );
};

export default BackButton;
