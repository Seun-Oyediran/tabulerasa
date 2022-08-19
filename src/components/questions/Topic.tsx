import React from 'react';
import { formatFollowersNos } from '../../utils';
import { Button } from '../form control';

interface IProps {
  name: string;
  followers: number;
}

const Topic = (props: IProps) => {
  const { followers, name } = props;

  return (
    <div className="topic-container my-3 py-1">
      <div className="d-flex gap-2">
        <div className="img-con">
          <img src="/svg/small_avatar.svg" alt="profile" />
        </div>
        <div>
          <h4>{name}</h4>
          <p>
            {formatFollowersNos(followers)}
            {' '}
            followers
          </p>
        </div>
      </div>

      <div className="mt-2">
        <Button title="Follow Topic" onClick={() => {}} className="topic-btn" />
      </div>
    </div>
  );
};

export default Topic;
