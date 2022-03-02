import React from 'react';
import ContentLoader from 'react-content-loader';

const ThreeDots = (props) => (
  <ContentLoader
    viewBox="0 0 400 200"
    height={91}
    width={200}
    backgroundColor="#1d7852"
    {...props}
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
);

ThreeDots.metadata = {
  name: 'RioF',
  github: 'clariokids',
  description: 'Three Dots',
  filename: 'ThreeDots',
};

export default ThreeDots;
