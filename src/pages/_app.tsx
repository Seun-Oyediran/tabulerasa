import React from 'react';
import type { AppProps } from 'next/app';

import '../../public/css/bootstrap.min.css';
import '../../public/css/global.css';
import '../../public/css/responsive.css';
import { MainLayout } from '../layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
