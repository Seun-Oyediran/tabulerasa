import React from 'react';
import { QuestionCard } from '../../components/questions';

const Requests = () => {
  return (
    <div>
      <QuestionCard
        request
        question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce"
      />
      <QuestionCard
        request
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
        img="/img/question_card.png"
      />

      <QuestionCard
        request
        question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce"
      />
      <QuestionCard
        request
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
      />

      <QuestionCard
        request
        question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce"
      />
      <QuestionCard
        request
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
      />
    </div>
  );
};

export default Requests;
