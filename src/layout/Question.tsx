import React, { ReactNode } from 'react';
import { QuestionLeftSidebar, QuestionRightSIdebar } from '../components/questions';

interface IProps {
  children: ReactNode;
}

const Question = (props: IProps) => {
  const { children } = props;
  return (
    <div className="question-layout-con">
      <QuestionLeftSidebar />
      <div className="question-main-content-con">{children}</div>
      <QuestionRightSIdebar />
    </div>
  );
};

export default Question;
