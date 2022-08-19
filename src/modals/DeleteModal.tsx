import React from 'react';
import { Button } from '../components';

const DeleteModal = () => {
  return (
    <div className="tabulerasa-delete-modal">
      <h3>Delete answer draft?</h3>
      <p>This can’t be undone and you’ll lose your unsent answer.</p>
      <div className="btns mt-5">
        <div className="d-flex gap-3">
          <Button title="Cancel" className="cancel" />
          <Button title="Delete" className="delete" />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
