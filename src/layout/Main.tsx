import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { Header } from '../components';
import routes from '../routes';
import Question from './Question';

interface IProps {
  children: ReactNode;
}

const { questions } = routes;

const questionRoutes = [questions.path, questions.answerDrafts.path, questions.answerRequests.path];

const MainWrapper = (props: IProps) => {
  const { children } = props;
  return (
    <div className="app-con">
      <Header />
      <div className="px-5 py-4 app-container">{children}</div>
    </div>
  );
};

const Main = (props: IProps) => {
  const { children } = props;
  const router = useRouter();

  if (questionRoutes.includes(router.pathname)) {
    return (
      <MainWrapper>
        <Question>{children}</Question>
      </MainWrapper>
    );
  }

  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
