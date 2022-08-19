import React, { Fragment } from 'react';
import Link from 'next/link';

interface IProps {
  title: string;
  className?: string;
  isLoading?: boolean;
  href?: string;
  onClick?: any;
}

export default function SubmitButton(props: IProps) {
  const { title, className, isLoading, href, onClick } = props;

  if (href) {
    return (
      <Link href={href}>
        <a href={href} className={`btn btn-success w-100 tabulerasa-submit-btn ${className}`}>
          {title}
        </a>
      </Link>
    );
  }

  const spinner = (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  return (
    <Fragment>
      {isLoading ? (
        <button disabled={isLoading} type="submit" className={`btn btn-success w-100 ${className}`}>
          {spinner}
        </button>
      ) : (
        <button
          type={onClick ? 'button' : 'submit'}
          onClick={onClick}
          className={`btn btn-success w-100 tabulerasa-submit-btn ${className}`}
        >
          {title}
        </button>
      )}
      <span />
    </Fragment>
  );
}
