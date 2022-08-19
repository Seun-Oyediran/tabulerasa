import Head from 'next/head';
import React, { Fragment } from 'react';
import { Preferences } from '../../svg';

const Header = () => {
  return (
    <Fragment>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="tabulerasa-header-container">
        <div className="d-flex justify-content-between align-items-center px-5 py-3">
          <div>
            <a href="/">
              <img src="/svg/logo.svg" alt="logo" />
            </a>
          </div>

          <div className="input-box">
            <input type="text" placeholder="&#xF002; Search" />
          </div>

          <div>
            <button type="button">
              <Preferences />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
