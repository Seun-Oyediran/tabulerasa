import React from 'react';
import { BackButton } from '../shared';
import AnswerCard from './AnswerCard';
// import EmptyAnswer from './EmptyAnswer';
import QuestionCard from './QuestionCard';

const SingleQuestionItem = () => {
  return (
    <div className="tabulerasa-single-question-item bg-white">
      <div className="py-2 px-2">
        <BackButton text="Question" />
      </div>

      <div className="px-3">
        <QuestionCard
          question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce"
          className="question-card"
          // img="/img/question_card.png"
          singleQuestion
        />
      </div>

      <div className="answers-con">
        <div className="title">
          <p className="px-3">Answers</p>
        </div>

        {/* <div className="py-5 px-3">
          <EmptyAnswer />
        </div> */}
        <div className="px-3">
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
        </div>
      </div>
    </div>
  );
};

export default SingleQuestionItem;
