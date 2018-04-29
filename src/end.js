import React from 'react';
import {
  Heading,
  Slide,
} from 'spectacle';

export const createEndSlide = () =>
  <Slide transition={['zoom']} bgColor="primary">
    <Heading size={1} fit caps textColor="secondary">
      Thank you!
    </Heading>
  </Slide>;
