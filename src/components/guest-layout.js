import React from 'react';
import Header from './header';

export default function (props) {
  // eslint-disable-next-line
  const { children } = props;
  return (
    <div style={{maxWidth: '800px', margin: 'auto'}}>
      <Header />
      {children}
    </div>
  );
}
