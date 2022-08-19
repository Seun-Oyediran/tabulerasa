import React from 'react';
import { QuestionCard } from '../../components/questions';

const Index = () => {
  return (
    <div>
      <QuestionCard question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce" />
      <QuestionCard
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
        img="/img/question_card.png"
      />

      <QuestionCard question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce" />
      <QuestionCard
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
      />

      <QuestionCard question="If I catch my husband cheating and can prove it, how can I make sure I get the most out of my divorce" />
      <QuestionCard
        anon
        question="What’s on your mind?What’s on your mind?What’s on your mind?What’s on your mind?"
      />
    </div>
  );
};

export default Index;
