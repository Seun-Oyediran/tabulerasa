import React from 'react';
import { Shuffle } from '../../svg';
import { Button } from '../form control';
import { ComingSoonCard } from '../shared';
import Topic from './Topic';

const QuestionRightSIdebar = () => {
  return (
    <div className="question-right-sidebar">
      <div className="right-con">
        <div className="bg-white conn">
          <h4 className="title">People also checked</h4>

          <div>
            <Topic name="Marital law" followers={10200} />
            <Topic name="Land law" followers={21200} />
            <Topic name="Corporate law" followers={34600} />
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="shuffle-btn d-flex justify-content-center align-items-center"
              type="button"
            >
              <Shuffle />
            </button>
          </div>

          <div className="mt-2">
            <Button title="Explore topics" onClick={() => {}} className="explore-btn" />
          </div>
        </div>

        <div>
          <ComingSoonCard
            title="Need help"
            message="Find a lawyer on the Tabulerasa marketplace by posting a brief about your situation."
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionRightSIdebar;
