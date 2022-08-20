import React from 'react';
import { Button } from '../form control';

const EmptyAnswer = () => {
  return (
    <div className="empty-response-con">
      <div className="mb-4">
        <img src="/svg/empty_state.svg" alt="no answer" />
      </div>
      <div>
        <h3 className="text-center">No resposes yet</h3>
        <p className="text-center">Be the first to answer this question</p>
      </div>

      <div className="d-flex justify-content-center my-3">
        <div>
          <Button title="Answer" className="action-btn" />
        </div>
      </div>
    </div>
  );
};

export default EmptyAnswer;
