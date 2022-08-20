import React from 'react';
import { ComingSoonCard, RightSideWrapper } from '../../../components';
import { RelatedQuestion, SingleQuestionItem } from '../../../components/questions';

const SingleQuestion = () => {
  return (
    <div className="tabulerasa-single-question-con">
      <div className="main-content mb-5">
        <SingleQuestionItem />
      </div>

      <div>
        <RightSideWrapper>
          <div className="mb-4">
            <ComingSoonCard
              title="Hire legal talent"
              message="Post an opening at your firm and get top applicants for available roles."
            />
          </div>
          <div className="bg-white conn">
            <div className="d-flex justify-content-between">
              <h4 className="title">Related questions</h4>
              <button type="button" className="no-btn-style">
                <img src="/svg/question.svg" alt="question" />
              </button>
            </div>

            <div>
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <RelatedQuestion key={index} />
                ))}
            </div>
          </div>
        </RightSideWrapper>
      </div>
    </div>
  );
};

export default SingleQuestion;
