import '../styles/globals.css';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;